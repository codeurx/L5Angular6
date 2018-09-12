<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DepartmentModel;

class DepartmentController extends Controller
{
    public function list(Request $request)
    {
        $dep = DepartmentModel::query();
        if ($request->get('search')) 
            $dep = $dep->where("name", "LIKE", "%{$request->get('search')}%");
        $dep = $dep->paginate(5);
        return response()->json(['list' => $dep], 200);
    }
    public function save(Request $request){
        $input = $request->all();
        $dep = new DepartmentModel();
        $dep->name = $input['name'];
        $dep->save();
        return response()->json(['msg' => 'ok',], 200);
    }
    public function delete($id){
        DepartmentModel::find($id)->delete();
        return response()->json(['msg' => 'ok',], 200);
    }
    public function update(Request $request)
    {
        $input = $request->all();
        $dep = DepartmentModel::find($input['id']);
        $dep->name = $input['name'];
        $dep->save();
        return response()->json(['msg' => 'ok',], 200);
    }
}
