<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{   
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'reviews';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'internet_exists',
        'internet_speed',
        'internet_has_password',
        'internet_password',
        'beverages',
        'foods',
        'service_rating',
        'price_rating',
        'coziness_rating',
        'quietness_rating',
        'overall_rating'
    ];


    /**
     * Get the user who registered the place
     */
    public function place()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * Get the user who registered the place
     */
    public function reviewer()
    {
        return $this->belongsTo('App\Models\User');
    }

}
