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
            <form>
                <div>
                    <select onChange={(e) => setOptions(e.target.value)}> 
                        {
                            values.map((opts,i) => <option>{opts.Name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <input className="input" type="number" name="quantity" id="quantity"
                        min="1" required>
                    </input>
                </div>
            </form>
            <h1>{options}</h1>
            <button className="btn-primary">
                <Link to={`/products`} className="btn-primary"> 
                    <img alt="home" src={plus}/> ADD NEW PRODUCT
                </Link>
            </button>
        </>
    )
}

export default function Pos() {
    return (
        <div className="main">
            <POSForm />
        </div>
    );
}