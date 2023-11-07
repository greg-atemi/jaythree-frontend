import {Link, useNavigate, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const AddStock = props => {
    const {id} = useParams();
    const {d} = useParams();
    const [ data, setData ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3030/products/'+id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3030/products/'+id, data)
            .then(res => {
                alert("Stock Added Successfully!!");
                navigate('/stock');
            }
        ).catch(err => console.log(err));
    }

    return (
        <div className="main2">
            <div className="modal">
                <div className="modal-content">
                    <p>ADD STOCK</p>
                    <form onSubmit={handleSubmit}>
                        <div className="fieldWrapper">
                            <label>Name</label>
                            <input className="input" type="text" name="name" id="name"
                                value={data.Name} disabled onChange={e =>
                                    setData({...data, Name: e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Quantity</label>
                            <input className="input" type="number" name="quantity" id="quantity"
                                value={data.Quantity} disabled onChange={e =>
                                    setData({...data, Quantity: e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Amount Added</label>
                            <input className="input" type="number" name="quantity" id="quantity"
                                value={data.addition} required onChange={e =>
                                    setData({...data, addition: e.target.value})}/>
                        </div>

                        <div className="button-group">
                            <input className="btn-primary" type="submit" value="SAVE"/>
                            <Link to={"/stock"}>
                                <button type="button" className="btn-secondary">CANCEL</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStock;
