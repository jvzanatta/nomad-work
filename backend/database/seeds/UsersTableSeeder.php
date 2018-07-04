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
        $userAmount = 20;
        // Create $userAmount users
        factory(User::class, $userAmount)->create();
    }
}
