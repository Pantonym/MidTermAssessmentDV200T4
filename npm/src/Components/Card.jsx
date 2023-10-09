import React from "react";
import './Navbar.css';

import { Card, CardImg } from 'react-bootstrap'

const Card = () => {

    return (
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Text>
                    <h2>{props.name}</h2>
                    <h3>{props.make}</h3>
                    <h3>{props.model}</h3>
                    <h3>{props.chasis}</h3>
                    <h3>{props.year}</h3>
                    <button id={"btnCart" + props.key}>Add To Cart</button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Card