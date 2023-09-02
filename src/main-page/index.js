import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './main-page.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import Products from "./products";
import CreateProduct from "./createProduct";

function Index() {
    return (
        <Router>
            <div className="container">
                <Sidebar />
                <Topbar />
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/createProduct" element={<CreateProduct/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Index;
