<?php

use Illuminate\Database\Seeder;

use App\Models\User as User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 15 users
        factory(User::class, 15)->create();
    }
}
