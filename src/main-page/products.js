import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import plus from "../images/plus.svg";
import edit from "../images/Edit.svg";
import Delete from "../images/Delete.svg";
import CreateProduct from "./createProduct";
import axios from "axios";

function PlusButton() {
    return (
        <button id="new" className="btn-primary">
            <Link to="/createProduct">
                <img alt="home" src={plus}/>
                ADD NEW
            </Link>
        </button>
    )
}

function ProductsTable() {
    const [ columns, setColumns ] = useState([])
    const [ records, setRecords ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3030/products').then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])
    return (
        <table className="product">
            <thead>
                <tr>
                    {columns.map((c, i) => (
                        <th key={i}> {c} </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    records.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.Name}</td>
                            <td>{d.Quantity}</td>
                            <td>{d.UnitPrice}</td>
                            <td>{d.Description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default function Products() {
    return (
        <div className="main">
            <PlusButton />
            <ProductsTable />
            <CreateProduct />
        </div>
    );
}