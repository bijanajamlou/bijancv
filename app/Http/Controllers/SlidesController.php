<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Slides;

class SlidesController extends Controller
{
   	public function index(){
   		
   		$slides = Slides::all();
   		
   		return $slides;
   	}
}
