<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TypeStage;

class TypeStageController extends Controller
{
    public function list(Request $request)
    {
        $type = TypeStage::query();
        if ($request->get('search')) 
            $type = $type->where("name", "LIKE", "%{$request->get('search')}%");
        $type = $type->paginate(5);
        return response()->json(['TypesStages' => $type,], 200);
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
    public function update(Request $request)
    {
        $input = $request->all();
        $type = TypeStage::find($input['id']);
        $type->name = $input['name'];
        $type->save();
        return response()->json(['msg' => 'ok',], 200);
    }
}
