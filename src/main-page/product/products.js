import React, { useEffect, useState } from 'react';
import plus from "./images/plus.svg";
import axios from "axios";
import CreateModal from "./createProduct";
import UpdateModal from "./updateProduct";
import {Link, useNavigate} from "react-router-dom";

function PlusButton() {
    const [showcreate, setShowCreate] = useState(false);

    return (
        <>
            <button onClick={() => setShowCreate(true)} className="btn-primary">
                <img alt="home" src={plus}/>
                ADD NEW
            </button>
            <CreateModal onClose={() => setShowCreate(false)} show={showcreate} />
        </>
    )
}

function ProductsTable(props){
    const [ columns, setColumns ] = useState([]);
    const [ records, setRecords ] = useState([]);
    const navigate = useNavigate();
    const [showupdate, setShowUpdate] = useState(false);

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
                                <button onClick={e => handleDelete(d.id)} className="btn-primary">DELETE</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )

    function handleDelete(id){
        const conf = window.confirm("Do you want to delete?");
        if(conf){
            axios.delete('http://localhost:3030/products/'+id)
                .then(res=>{
                    alert('record has been deleted');
                    navigate('/products')
                }).catch(err => console.log(err))
        }
    }
}

export default function Products() {
    return (
        <div className="main">
            <PlusButton />
            <ProductsTable />
            <CreateModal />
        </div>
    );
}