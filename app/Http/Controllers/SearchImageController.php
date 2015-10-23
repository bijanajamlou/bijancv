<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Colors;

class SearchImageController extends Controller
{



   	public function index(){
   		return 'I work';
   		
   	}

   	protected function get_url_contents($url) {
		$crl = curl_init();
		curl_setopt($crl, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
		curl_setopt($crl, CURLOPT_URL, $url);
		curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($crl, CURLOPT_CONNECTTIMEOUT, 5);
		$ret = curl_exec($crl);
		curl_close($crl);
		return $ret;
	}

   	public function searchImage($searchString){
   		$url = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='. $searchString; //. $searchString;

   		$json = $this->get_url_contents($url);
   		if ($json === false)
		{
		    die("Couldn't fetch the response from google");
		}
 
		$data = json_decode($json);
 
		foreach ($data->responseData->results as $result) {
			$results[] = array('url' => $result->url, 'alt' => $result->title);
   		}

    	$returnValue = json_encode($results , JSON_UNESCAPED_SLASHES);
  //  		$test = $this->testi($url);
   		return $returnValue;

	}

	public function searchImageGoogleWebAPI($searchString){

		// $cleanString = $this->clean($searchString);
		// $searchStringNoSpaces = $this->noSpaces($cleanString);

		$API_KEY = 'AIzaSyCtSTHeH8WX8ShlQTi66RNQlzezhP8PG1Q';
		$url = 'https://www.googleapis.com/customsearch/v1?q=' . $searchString . '&fileType=jpg&imgSize=medium&searchType=image&num=4&key='. $API_KEY . '&cx=003260180178473283276:xvdmwxizk1g';

		$json = file_get_contents($url);
		if ($json === false)
		{
		    die("Couldn't fetch the response from google");
		}

		$data = json_decode($json);
 
		foreach ($data->items as $result) {
			$results[] = array('url' => $result->link, 'alt' => $result->title);
   		}

   		$returnValue = json_encode($results , JSON_UNESCAPED_SLASHES);

		return $returnValue;
	}

	// protected function clean($string) {
	// 	   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

	// 	   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	// }

	// protected function noSpaces($string) {
	// 	   return str_replace(' ', '%22', $cleanString);
	// }


}
