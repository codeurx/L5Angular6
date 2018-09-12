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
    public function save(Request $request){
        $input = $request->all();
        $type = new TypeStage();
        $type->name = $input['name'];
        $type->save();
       return response()->json(['msg' => 'ok',], 200);
    }
    public function delete($id){
        TypeStage::find($id)->delete();
       return response()->json(['msg' => 'ok',], 200);
    }
}
