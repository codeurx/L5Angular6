<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableTypesStages extends Migration
{
    public function up()
    {
        Schema::create('types_stages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
        });
    }
    public function down()
    {
        Schema::dropIfExists('types_stages');
    }
}
