<?php

use Illuminate\Http\Request;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResources([
    'places' => 'PlaceController',
    'reviews' => 'ReviewController',
    'users' => 'UserController'
]);
