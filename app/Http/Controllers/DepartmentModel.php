<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;

class DepartmentModel extends Model
{
    protected $table = "departments";
    public $timestamps = false;
    protected $fillable = ['name'];
}
