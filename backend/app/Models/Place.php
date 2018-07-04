<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'places';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address', 'city', 'state', 'country', 'type'
    ];

    
    /**
     * Get the user who registered the place
     */
    public function registeredBy()
    {
        return $this->belongsTo('App\Models\User', 'registered_by');
    }

    /**
     * Get place's reviews
     */
    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }
}
