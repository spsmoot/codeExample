<?php

namespace App\Http\Controllers;

use App\Dealer;
use App\Review;
use Illuminate\Support\Facades\Auth;

/**
 * Class DealerController
 *
 * @package App\Http\Controllers
 */
class DealerController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('dealer.index');
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDealers()
    {
        $dealers = Dealer::with('reviews')->get();
        //use laravel passport to get authentication for user
        return response()->json(['dealers' => $dealers/*, 'user' => auth()->user()*/], 200);
    }
}
