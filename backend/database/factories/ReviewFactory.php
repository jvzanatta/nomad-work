<?php

use Faker\Generator as Faker;

use App\Models\Review as Review;

$factory->define(Review::class, function (Faker $faker) {
    $hasInternet = $faker->boolean($chanceOfGettingTrue = 80);
    $hasPassword = $hasInternet ? $faker->boolean : null;

    return [
        'user_id' => $faker->numberBetween(1, 10),
        //'place_id' => $faker->,
        'internet_exists' => $hasInternet,
        'internet_speed' => $hasInternet ? $faker->numberBetween(10, 100).'mb' : null,
        'internet_has_password' => $hasPassword,
        'internet_password' => $hasPassword ? $faker->asciify('********') : null,
        //'beverages' => $faker->,
        //'foods' => $faker->,
        'service_rating' => $faker->numberBetween(1, 5),
        'price_rating' => $faker->numberBetween(1, 5),
        'coziness_rating' => $faker->numberBetween(1, 5),
        'quietness_rating' => $faker->numberBetween(1, 5),
        'overall_rating' => $faker->numberBetween(1, 5),
    ];
});
