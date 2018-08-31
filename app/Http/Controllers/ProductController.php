<?php

namespace App\Http\Controllers;

use App\Http\Requests\Products\Store;
use App\Http\Requests\Products\Update;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(['products' => Product::limit(10)->get()], 200);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function store(Store $request)
    {
        $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    public function update(Update $request, Product $product)
    {
        $product->update($request->all());

        return response()->json($product, 200);
    }

    public function delete(Product $product)
    {
        try {
            $product->delete();
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

        return response()->json(null, 204);
    }
}
