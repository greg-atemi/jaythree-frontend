import {Link, useNavigate, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const UpdateModal = props => {
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
                alert("Product Updated Successfully!!");
                navigate('/products');
            }
        ).catch(err => console.log(err));
    }

    return (
        <div className="main2">
            <div className="modal">
                <div className="modal-content">
                    <p>UPDATE PRODUCT</p>
                    <form onSubmit={handleSubmit}>
                        <div className="fieldWrapper">
                            <label>Name</label>
                            <input className="input" type="text" name="name" id="name"
                                value={data.Name} required onChange={e =>
                                    setData({...data, Name: e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Quantity</label>
                            <input className="input" type="number" name="quantity" id="quantity"
                                value={data.Quantity} required onChange={e =>
                                    setData({...data, Quantity: e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Price in Kshs</label>
                            <input className="input" type="number" name="unit_price" id="unit_price"
                               value={data.UnitPrice} required onChange={e =>
                                   setData({...data, UnitPrice: e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Description</label>
                            <textarea className="input" name="description" id="description"
                                value={data.Description} onChange={e =>
                                    setData({...data, Description: e.target.value})}>
                            </textarea>
                        </div>

                        <div className="button-group">
                            <input className="btn-primary" type="submit" value="SAVE"/>
                            <Link to={"/products"}>
                                <button type="button" className="btn-secondary">CANCEL</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;
