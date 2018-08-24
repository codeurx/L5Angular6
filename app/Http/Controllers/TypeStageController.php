<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TypeStage;

class TypeStageController extends Controller
{
    public function all()
    {
        return response()->json(['TypesStages' => TypeStage::all(),], 200);
    }
}
