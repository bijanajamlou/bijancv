<?php 

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use database\seeds\SlidesTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
       	$this->call(SlidesTableSeeder::class);
        $this->command->info('Slider table seeded.');

        Model::reguard();
    }
    
    
}
