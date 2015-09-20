<?php 

namespace database\seeds;
use App\Slides;
use Illuminate\Database\Seeder;
use database\seeds\DatabaseSeeder;
use Illuminate\Support\Facades\DB;

class SlidesTableSeeder extends Seeder {

    public function run()
    {
        DB::table('slides')->delete();
    
        Slides::create(array(
            'title' => 'Touchguide',
            'desc' => 'Touchguide is an indoor map station for shopping mals. In this project i made the front-end and interaction design.',
            'url' => '/img/img1.jpg'
        ));
    
        Slides::create(array(
            'title' => 'Projectmap',
            'desc' => 'Projectmap is a web client for the property information and analysis. In this project I made an end to end solution.',
            'url' => '/img/img2.jpg'
        ));
    
        Slides::create(array(
            'title' => 'GUI design',
            'desc' => 'In this project I created a concept to display environment benefits of driving collectively.',
            'url' => '/img/img3.jpg'
        ));

        Slides::create(array(
            'title' => 'Stoneridge future dashboard concept',
            'desc' => 'This project was made to display the potential of digital dashboards for trucks. In this project I created a GUI, front-end and animations',
            'url' => '/img/img4.jpg'
        ));

        Slides::create(array(
            'title' => 'Live betting web client',
            'desc' => 'In this project I worked with the front-end',
            'url' => '/img/img5.jpg'
        ));

        Slides::create(array(
            'title' => 'E-learning',
            'desc' => 'In this project I created a e-learning tool',
            'url' => '/img/img6.jpg'
        ));
    }    

}