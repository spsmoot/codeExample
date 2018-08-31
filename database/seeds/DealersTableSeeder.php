<?php

use App\Dealer;
use Illuminate\Database\Seeder;
use Faker\Factory;

class DealersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 15; $i++) {
            Dealer::create([
                'name'           => $faker->company,
                'description'    => $faker->text,
                'established_on' => $faker->date('Y-m-d'),
            ]);
        }
    }
}
