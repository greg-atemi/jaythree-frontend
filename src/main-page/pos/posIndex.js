import React, { useEffect, useState } from 'react';
import plus from "./images/plus.svg";
import {Link} from "react-router-dom";

function POS() {
    const [values, setValues] = useState([])
    const [options, setOptions] = useState([])

    const [formData, setFormData] = useState({
        id: '',
        quantity: '',
        name: '',
        price: '',
        total: ''
      });

    useEffect(() => {
        fetch('http://localhost:3030/products').then((data) => data.json()).then((val) => setValues(val))
    }, [])

    const [tableData, setTableData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Update table data with new form data
        setTableData([...tableData, formData]);

        // Clear the form after submission
        setFormData({
            id: '',
            quantity: '',
            name: '',
            price: '',
            total: ''
        });
    };

    return (
        <>
            <div className='parent-form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <select onChange={(e) => setOptions(e.target.value)} name='Name'> 
                            {
                                values.map((opts,i) => <option>{opts.Name}</option>)
                            }
                        </select>
                        <input className="input" type="number" name="quantity" id="quantity"
                            min="1" defaultValue={1} required>
                        </input>
                    </div>
                    <div>
                        <button className="btn-primary">
                            <img alt="home" src={plus}/>
                            ADD PRODUCT
                        </button>
                    </div>
                </form>
            </div>
    
            <table className="product">
                <thead>
                    <tr>
                        <th></th>
                        <th>Quantity</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                        <td>{data.quantity}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.total=data.price*data.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default function Pos() {
    return (
        <div className="main">
            <POS />
        </div>
    );
}