import React,{useState} from "react";
import Home from "../../home/screen/home.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAuthenticate from "../Authentication/login.authenticate";

const Login = () => {
    const [token, setToken]= useState();
    if(!token){
        return <LoginAuthenticate setToken={setToken}/>
    }
    return (
        <div className="wrapper">
        <BrowserRouter>
        <Routes >
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default Login;