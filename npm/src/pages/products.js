import React from "react";
import './products.css';

import { useState } from "react";

// Import Axios
import Axios from "axios";

import { Card } from "react-bootstrap";

const Products = () => {

    const [cards, setCards] = useState();

    Axios.get('http://localhost:5000/api/products_get_all/')
        .then(res => {
            let productData = res.data;
            console.log(productData);

            let renderProducts = productData.map((item) =>
                <Card key={item._id} id={item.partID} name={item.name} make={item.make} model={item.model} chasis={item.chasis} year={item.year} 
                />)

            setCards(renderProducts);
        })
        .catch(err => console.log(err))

    return (
        <>
            <div>

                {cards}

            </div>
        </>
    )
}
export default Products