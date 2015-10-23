<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

 Route::get('/', function () {
     return view('welcome');
 });
 
// Route::get('/', function() {
//     return View::make('index'); 
// });

Route::get('/about', 'PagesController@about');
Route::get('/slides', 'SlidesController@index');
Route::get('/colors', 'ColorsController@index');
Route::get('/searchImage/{searchString}', 'SearchImageController@searchImage');
Route::get('/searchImageGoogleWebAPI/{searchString}', 'SearchImageController@searchImageGoogleWebAPI');

