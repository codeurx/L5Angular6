<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeStage extends Model
{
    protected $table = "types_stages";
    protected $fillable = ['name'];
}
