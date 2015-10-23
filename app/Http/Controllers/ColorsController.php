<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Colors;

class ColorsController extends Controller
{



   	public function index(){
   		
   		$url = 'http://projectmap.se/config/colors.config';
		
		$contents = file_get_contents($url);
		if ($contents === false)
		{
		    die("Couldn't fetch the file.");
		}

		$result = preg_replace('/;.*/', '', $contents); // remove all comments line
		$result = preg_replace('/\s+/', ' ', $result); // remove all new lines
		$trimmed = trim($result); // trim


		$trimmed =  explode(' ', $trimmed);

		//create json preprared array
		$jsonPrepArray = array();
		foreach ($trimmed as $key => $value) {
			$array = array(
			    "color" => $value
			);
			array_push($jsonPrepArray, $array);
		}

		$json = json_encode($jsonPrepArray);

   		return $json;
   	}




 
}
