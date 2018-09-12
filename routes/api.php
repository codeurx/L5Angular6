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
Route::get('/types-stages', [
    'uses' => 'TypeStageController@all',
    'middleware' => 'jwt.auth',
]);
Route::get('/delete-type-stage-{id}', [
    'uses' => 'TypeStageController@delete',
    'middleware' => 'jwt.auth',
]);
Route::post('/save-new-type-stage', [
    'uses' => 'TypeStageController@save',
    'middleware' => 'jwt.auth',
]);