import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './main-page.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import Products from "./products";
import UpdateProduct from "./updateProduct";

function Index() {
    return (
        <Router>
            <div className="container">
                <Sidebar />
                <Topbar />
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/product/update/:id" element={<UpdateProduct/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Index;
