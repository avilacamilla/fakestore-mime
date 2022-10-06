import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";

export default () => {
    return (
        <Routes>
            <Route element={ <Login /> } path="/" exact />
            <Route element={ <Products /> } path="/produtos" />
        </Routes>
    );
}

