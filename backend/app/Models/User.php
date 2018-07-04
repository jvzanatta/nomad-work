<?php

namespace App\Models;

// use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // use Notifiable;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the places registered by the user
     */
    public function registeredPlaces()
    {
        return $this->hasMany('App\Models\Place', 'registered_by');
    }

    /**
     * Get the user's reviews
     */
    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

}
