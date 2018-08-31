<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'dealer_id',
        'user_id',
        'review',
        'rating',
    ];
}
