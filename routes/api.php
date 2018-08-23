<?php

use Illuminate\Http\Request;

header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token, x_csrftoken');

Route::post('/login', [
    'uses' => 'UserController@login'
]);
Route::get('/user', [
  'uses' => 'UserController@getUser',
  'middleware' => 'jwt.auth'
]);
Route::get('/logout', [
    'uses' => 'UserController@logout',
    'middleware' => 'jwt.auth'
]);

