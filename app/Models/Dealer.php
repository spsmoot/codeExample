<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Dealer
 *
 * @property Collection $reviews
 * @property string     $name
 * @property string     $description
 * @property Carbon     $established_on
 * @property int        $average_rating
 *
 * @package App
 */
class Dealer extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'established_on',
    ];

    /**
     * Pull in the reviews attached to the dealer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function getAverageRatingAttribute()
    {
        $reviews = $this->reviews;
        $count   = 0;
        $total   = 0;

        foreach ($reviews as $review) {
            $count++;
            $total += $review->rating;
        }

        return number_format($total / $count, 2);
    }

    public function toArray()
    {
        $array = parent::toArray();

        $array['average_rating'] = $this->average_rating;

        return $array;
    }
}
