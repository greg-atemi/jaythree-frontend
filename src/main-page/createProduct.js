import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateModal = props => {
    const [inputData, setInputData] = useState({
        id:'', Name:'', Quantity:'', UnitPrice:'', Description:''
    })

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:3030/products', inputData).then(
            res => {
                alert("Product Added Successfully!!");
                navigate('/');
            }
        ).catch(err => console.log(err));
    }

    if(!props.show){
        return null
    }

    return (
        <div className="main2">
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <p>ADD NEW PRODUCT</p>
                    <form onSubmit={handleSubmit} action="" method="post">
                        <div className="fieldWrapper">
                            <label>Name</label>
                            <input className="input" type="text" name="name" id="name" required
                            onChange = {e =>
                                setInputData({...inputData, Name:e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Quantity</label>
                            <input className="input" type="number" name="quantity" id="quantity" required
                               onChange = {e =>
                                   setInputData({...inputData, Quantity:e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Price in Kshs</label>
                            <input className="input" type="number" name="unit_price" id="unit_price" required
                               onChange = {e =>
                                   setInputData({...inputData, UnitPrice:e.target.value})}/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Description</label>
                            <textarea className="input" name="description" id="description"
                                onChange = {e =>
                                setInputData({...inputData, Description:e.target.value})}>
                            </textarea>
                        </div>

                        <div className="button-group">
                            <input className="btn-primary" type="submit" value="SAVE"/>
                            <button onClick={props.onClose} type="button" className="btn-secondary">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;
