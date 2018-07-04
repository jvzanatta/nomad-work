<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('places', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('registered_by')
                ->comment('The user who registered this place');

            $table->string('name');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->enum('type', ['Café', 'Restaurante', 'Coworking', 'Livraria', 'Outro']);
            
            $table->timestamps();

            // FKs
            $table->foreign('registered_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('places');
    }
}
