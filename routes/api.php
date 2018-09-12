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
Route::post('/types-stages', [
    'uses' => 'TypeStageController@list',
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
Route::post('/update-type-stage', [
    'uses' => 'TypeStageController@update',
    'middleware' => 'jwt.auth',
]);
Route::get('/departments', [
    'uses' => 'DepartmentController@list',
    'middleware' => 'jwt.auth',
]);
Route::post('/save-department', [
    'uses' => 'DepartmentController@save',
    'middleware' => 'jwt.auth',
]);
Route::post('/update-department', [
    'uses' => 'DepartmentController@update',
    'middleware' => 'jwt.auth',
]);
Route::get('/delete-department-{id}', [
    'uses' => 'DepartmentController@delete',
    'middleware' => 'jwt.auth',
]);