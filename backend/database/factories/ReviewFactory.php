<?php

use Faker\Generator as Faker;

use App\Models\Review as Review;

$factory->define(Review::class, function (Faker $faker) {
    $foods = ['Salgados', 'Doces', 'Refeições', 'Porções', 'Salgadinhos'];
    $beverages = ['Água', 'Refrigerantes', 'Café', 'Cerveja', 'Drinks'];
    $hasInternet = $faker->boolean($chanceOfGettingTrue = 80);
    $hasPassword = $hasInternet ? $faker->boolean : null;

    return [
        'internet_exists' => $hasInternet,
        'internet_speed' => $hasInternet ? $faker->numberBetween(10, 100).'mb' : null,
        'internet_has_password' => $hasPassword,
        'internet_password' => $hasPassword ? $faker->asciify('********') : null,
        'beverages' => implode(", ",$faker->randomElements($beverages, $faker->numberBetween(1, 4))),
        'foods' => implode(", ",$faker->randomElements($foods, $faker->numberBetween(1, 4))),
        'service_rating' => $faker->numberBetween(2, 5),
        'price_rating' => $faker->numberBetween(2, 5),
        'coziness_rating' => $faker->numberBetween(2, 5),
        'quietness_rating' => $faker->numberBetween(2, 5),
        'overall_rating' => $faker->numberBetween(2, 5),
    ];
});
