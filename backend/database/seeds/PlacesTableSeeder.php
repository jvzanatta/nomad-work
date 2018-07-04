<?php

use Illuminate\Database\Seeder;

use App\Models\Place as Place;


class PlacesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Models\User::all()->each(function ($user) {
            // Create 3 places for each of the registeres users
            for ($i = 0; $i < 3; $i++) {
                $user->registeredPlaces()->save(factory(App\Models\Place::class)->make());
            }
        });
    }
}
