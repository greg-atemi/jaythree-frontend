import React, { useEffect, useState } from 'react';
import plus from "../images/plus.svg";
import edit from "../images/Edit.svg";
import Delete from "../images/Delete.svg";
import CreateProduct from "./createProduct";
import axios from "axios";
import CustomModal from "./createProduct";
import {Link} from "react-router-dom";

function PlusButton() {
    const [showcreate, setShowCreate] = useState(false);

    return (
        <>
            <button onClick={() => setShowCreate(true)} className="btn-primary">
                <img alt="home" src={plus}/>
                ADD NEW
            </button>
            <CustomModal onClose={() => setShowCreate(false)} show={showcreate} />
        </>
    )
}

function ProductsTable() {
    const [ columns, setColumns ] = useState([]);
    const [ records, setRecords ] = useState([]);

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
                            <td style={{display: "flex"}}>
                                <Link to={`/product/update/${d.id}`} className="btn-primary"> Update </Link>
                                {/*<button onClick={() => setShowEdit(true)} className="btn-primary">Edit</button>*/}
                            </td>
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