import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import { Signin } from "../Pages/Signin";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/signin', element: <Signin />}
    ])
}