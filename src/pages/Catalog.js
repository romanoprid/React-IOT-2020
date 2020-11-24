import React from 'react';
import CardUI from "../cards/CardUI";
import "../styles/catalog.css"

const hockeypucks = [{

    id: 0,
    name: "LION",
    amount: 23,
    price: 345,


},

    {
        id: 1,
        name: "METTALURG",
        amount: 253,
        price: 345,
    },

    {

        id: 2,
        name: "CHECKERS",
        amount: 43,
        price: 345,
    },
    {

        id: 3,
        name: "FALCONS",
        amount: 43,
        price: 345,
    },
    {

        id: 4,
        name: "OILERS",
        amount: 43,
        price: 345,
    },
]
export default function Catalog() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {hockeypucks.map(item => {
                        return <div className="col-md-4 ">
                            <CardUI item={item} key={item.id}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
