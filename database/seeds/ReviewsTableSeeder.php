<?php

use App\Dealer;
use App\User;
use App\Review;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 100; $i++) {
            Review::create([
                'dealer_id' => Dealer::all()->random()->id,
                'user_id'   => User::all()->random()->id,
                'review'    => $faker->text,
                'rating'    => $faker->randomFloat(2, 0, 5),
            ]);
        }
    }
}
