import React, { useEffect, useState } from 'react';
import plus from "./images/plus.svg";
import {Link} from "react-router-dom";

function POSForm() {
    const [values, setValues] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/products').then((data) => data.json()).then((val) => setValues(val))
    }, [])

    return (
        <>
            <div className='parent-form'>
                <form>
                    <div>
                        <select onChange={(e) => setOptions(e.target.value)}> 
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
        </>
    )
}

function POSTable(props){
    const [ records, setRecords ] = useState([]);

    return (
        <>
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
            {/* <tbody>
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.Name}</td>
                    <td>{d.Quantity}</td>
                </tr>
            </tbody> */}
        </table>
        </>
    )

}

export default function Pos() {
    return (
        <div className="main">
            <POSForm />
            <POSTable />
        </div>
    );
}