import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";

export default () => {
    return (
        <Routes>
            <Route element={ <Products /> } path="/" />
        </Routes>
    );
}
