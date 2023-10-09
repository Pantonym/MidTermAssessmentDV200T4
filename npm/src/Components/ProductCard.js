import React from "react";

import { useState } from "react";

import { Card } from 'react-bootstrap'

const ProductCard = (props) => {

    // Confirm click
    const [oneClick, setOneClick] = useState(false);

    const handleClick = () => {
        if (!oneClick) {
            setOneClick(true);
            localStorage.setItem("ProductID", props.key);
        } else {
            console.log(localStorage.getItem("ProductID"));
            window.location = '/SingleProduct';
        }
    };

    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    <h3>{props.name}</h3>
                    <h3>{props.make}</h3>
                    <h3>{props.model}</h3>
                    <h3>{props.chasis}</h3>
                    <h3>{props.year}</h3>
                    <h3>R{props.price}</h3>
                    <button id={"btnCart" + props.key} onClick={handleClick}> Add To Cart </button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ProductCard