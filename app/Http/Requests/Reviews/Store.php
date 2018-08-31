<?php

namespace App\Http\Requests\Reviews;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'dealer_id' => 'required|exists:dealers,id',
            'user_id'   => 'required|exists:users,id',
            'review'    => 'required',
            'rating'    => 'required|min:.01|max:5',
        ];
    }
}
