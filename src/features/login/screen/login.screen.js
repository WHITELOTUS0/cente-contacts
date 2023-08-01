import React from "react";
import Home from "../../home/screen/home.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = () => {
    return (
        <BrowserRouter>
        <Routes >
            <Route path="" element={<Home/>}/>
        </Routes>
        </BrowserRouter>

    )
}

export default Login;