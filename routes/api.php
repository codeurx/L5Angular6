<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [
    'uses' => 'UserController@login'
]);
//Route::get('/user', [
//    'uses' => 'UserController@getUser',
//    'middleware' => 'jwt.auth'
//]);
//Route::get('/logout', [
//    'uses' => 'UserController@logout',
//    'middleware' => 'jwt.auth'
//]);

