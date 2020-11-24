import React from 'react';

import black from "../images/cards/black.jpg";
import "../styles/cards.css"


const CardUI = (props) => {
    const item = props.item
    return (

        <div className="card">
            <div className="overflow ">
                <img className="Hockeypuck" src={black}/>

            </div>


            <div className="card-body">
                <h4>Hockeypuck</h4>
                <p>Name: {item.name}</p>
                <p>Amount: {item.amount}</p>
                <p>Price: {item.price} ₴</p>
            </div>
            <a href="#" className="btn button-outline">
                Shop Now
            </a>


        </div>


    );

}

export default CardUI;