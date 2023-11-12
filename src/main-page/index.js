import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './main-page.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import Stock from './stock/stocks';
import Pos from './pos/posIndex';
import AddStock from './stock/addStock';
import RemoveStock from './stock/removeStock';
import Products from './product/products';
import UpdateProduct from "./product/updateProduct";

function Index() {
    return (
        <Router>
            <div className="container">
                <Sidebar />
                <Topbar />
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/stock" element={<Stock/>} />
                    <Route path="/pos" element={<Pos/>} />
                    <Route path="/product/update/:id" element={<UpdateProduct/>} />
                    <Route path="/stock/add/:id" element={<AddStock/>} />
                    <Route path="/stock/remove/:id" element={<RemoveStock/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Index;
