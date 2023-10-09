import React from "react";
import './Navbar.css';

import { Card } from 'react-bootstrap'

const ProductCard = (props) => {

    return (
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Text>
                    <h3>{props.name}</h3>
                    <h3>{props.make}</h3>
                    <h3>{props.model}</h3>
                    <h3>{props.chasis}</h3>
                    <h3>{props.year}</h3>
                    <h3>R{props.price}</h3>
                    <button id={"btnCart" + props.key}>Add To Cart</button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ProductCard