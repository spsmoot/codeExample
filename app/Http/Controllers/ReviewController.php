<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reviews\Store;
use App\Review;

class ReviewController extends Controller
{
    public function store(Store $request)
    {
        $data = $request->input();
        $data['user_id'] = auth()->user()->id;

        try {
            $review = Review::create($data);
            return response()->json($review, 201);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 403);
        }
    }
}
