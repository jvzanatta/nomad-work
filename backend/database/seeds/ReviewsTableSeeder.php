<?php

use Illuminate\Database\Seeder;

use App\Models\User as User;
use App\Models\Place as Place;
use App\Models\Review as Review;


class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $places = Place::all();

        // Create one review per user for each place in the database
        $places->each(function ($place) use ($users) {
            $users->each(function ($user) use ($place) {
                $place->reviews()->save(factory(Review::class)->make(['user_id' => $user->id]));
            });
        });
    }
}
