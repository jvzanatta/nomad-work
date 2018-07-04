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
        $placesPerUser = 4;

        App\Models\User::all()->each(function ($user) use ($placesPerUser) {
            // Create $placesPerUser places for each of the registeres users
            for ($i = 0; $i < $placesPerUser; $i++) {
                $user->registeredPlaces()->save(factory(App\Models\Place::class)->make());
            }
        });
    }
}
