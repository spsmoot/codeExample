<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DealersTableSeeder::class,
            UsersTableSeeder::class,
            ReviewsTableSeeder::class, # Needs Dealers & Users first
        ]);
    }
}
