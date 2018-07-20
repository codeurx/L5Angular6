<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;

class UserController extends Controller
{
    public function login(Request $request)
    {

        $credentials = $request->only('email', 'password');
        $token = JWTAuth::attempt($credentials);
        if ($token) {
            return response()->json(['token' => $token]);
        } else {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }
    }
    public function token(){
        $user = User::find(1);
        return $user->createToken('test token')->accessToken;
    }
    public function demo(){
        if (Auth::check()) {
            return Auth::user()->AauthAcessToken();
         }
    }

//    public function getUser(Request $request)
//    {
//        $user = JWTAuth::parseToken()->authenticate();
//        return response()->json($user);
//    }
//
//    public function logout(Request $request)
//    {
//        $token = JWTAuth::getToken();
//        JWTAuth::invalidate($token);
//        return response()->json(['message' => 'The token has been blacklisted'], 200);
//    }
}