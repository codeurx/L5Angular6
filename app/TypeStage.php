<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeStage extends Model
{
    protected $table = "types_stages";
    public  $timestamps = false;
    protected $fillable = ['name'];
}
