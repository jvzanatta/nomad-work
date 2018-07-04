<?php

use Faker\Generator as Faker;

use App\Models\Place as Place;

$factory->define(Place::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'address' => $faker->streetAddress,
        'city' => $faker->city,
        'state' => $faker->state,
        'country' => $faker->country,
        'type' => $faker->randomElement(['Café', 'Restaurante', 'Coworking', 'Livraria', 'Outro']),
    ];
});
