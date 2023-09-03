import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const CustomModal = props => {
    if(!props.show){
        return null
    }
    return (
        <div className="main2">
            <div className="modal">
                <div className="modal-content">
                    <p>ADD NEW PRODUCT</p>
                    <form action="" method="post">
                        <div className="fieldWrapper">
                            <label>Name</label>
                            <input className="input" type="text" name="name" id="name" required/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Quantity</label>
                            <input className="input" type="number" name="quantity" id="quantity" required/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Price in Kshs</label>
                            <input className="input" type="number" name="unit_price" id="unit_price" required/>
                        </div>

                        <div className="fieldWrapper">
                            <label>Description</label>
                            <textarea className="input" name="description" id="description"></textarea>
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

export default CustomModal;
