import React, { useEffect, useState } from 'react';
import plus from "./images/plus.svg";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function ProductForm() {
    return (
        <>
            <form>
                <div>
                    <select name="product" id="product" required>
                        <option value="" selected="selected">Choose Product</option>
                    </select>
                </div>
                <div>
                    <input className="input" type="number" name="quantity" id="quantity"
                        min="1" required>
                    </input>
                </div>
            </form>
            <button className="btn-primary">
                <Link to={`/products`} className="btn-primary"> 
                    <img alt="home" src={plus}/> ADD NEW PRODUCT
                </Link>
            </button>
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
                    <th>id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Description</th>
                    <th>Actions</th>
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

export default function Pos() {
    return (
        <div className="main">
            <ProductForm />
            <ProductsTable />
        </div>
    );
}