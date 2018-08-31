<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/***************
 * User Routes *
 ***************/

/*****************
 * Dealer Routes *
 *****************/
Route::get('dealers/getDealers', 'DealerController@getDealers');

/*****************
 * Review Routes *
 *****************/
Route::post('reviews', 'ReviewController@store');

//
Route::get('products', 'ProductController@index');
Route::get('products/{product}', 'ProductController@show');
Route::post('products','ProductController@store');
Route::put('products/{product}','ProductController@update');
Route::delete('products/{product}', 'ProductController@delete');
