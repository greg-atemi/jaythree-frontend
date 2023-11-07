import React, { useEffect, useState } from 'react';
import plus from "./images/plus.svg";
import axios from "axios";
import AddModal from "./addStock";
// import UpdateModal from "./updateProduct";
import {Link, useNavigate} from "react-router-dom";

function PlusButton() {
    return (
        <>
            <button className="btn-primary">
                <Link to={`/products`} className="btn-primary"> 
                    <img alt="home" src={plus}/> ADD NEW PRODUCT
                </Link>
            </button>
        </>
    )
}

function StockTable(props){
    const [ columns, setColumns ] = useState([]);
    const [ records, setRecords ] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3030/products').then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])

    return (
        <>
        <table className="product">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.Name}</td>
                            <td>{d.Quantity}</td>
                            <td style={{display: "flex"}}>
                                <Link to={`/stock/add/${d.id}`} className="btn-primary"> Add </Link>
                                <Link to={`/stock/remove/${d.id}`} className="btn-primary"> Remove </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )

}

export default function Stock() {
    return (
        <div className="main">
            <PlusButton />
            <StockTable />
        </div>
    );
}
