<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('place_id');

            $table->boolean('internet_exists')
                ->comment('Whether the place has internet or not');

            $table->string('internet_speed', 10)->nullable()
                ->comment('The internet speed');

            $table->boolean('internet_has_password')->nullable()
                ->comment('Whether the wireless network has a password or not');

            $table->string('internet_password')->nullable()
                ->comment('The password for the wireless network');

            $table->string('beverages')->nullable()
                ->comment('Beverages the place sells (will be cast to array)');

            $table->string('foods')->nullable()
                ->comment('Foods the place sells (will be cast to array)');

            $table->tinyInteger('service_rating');

            $table->tinyInteger('price_rating');

            $table->tinyInteger('coziness_rating')
                ->comment('How cozzy the place is (desk, chairs, etc)');

            $table->tinyInteger('quietness_rating')
                ->comment('How quiet the place is (less noisy is better)');

            $table->tinyInteger('overall_rating');
            
            $table->timestamps();

            // FKs
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('place_id')->references('id')->on('places');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
        Schema::dropIfExists('reviews');
    }
}
