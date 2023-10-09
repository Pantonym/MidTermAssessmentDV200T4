import React from "react";
import './products.css';

import { useState, useEffect } from "react";

import { Button } from 'react-bootstrap'

import Grid from '@mui/material/Grid';

// Import Axios
import Axios from "axios";

import ProductCard from "../Components/ProductCard";

const Products = () => {

    const [cards, setCards] = useState();
    const [reRenderProducts, setReRenderProducts] = useState(false);

    const isAdmin = localStorage.getItem("User") === "Admin";
    const [admin, setAdmin] = useState(isAdmin);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/getparts')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                let renderProducts = productData.map((item) =>
                    <ProductCard key={item._id} id={item.partID} name={item.name} make={item.make} model={item.model} chasis={item.chasis} year={item.year} price={item.price} image={item.image}
                    />)

                setCards(renderProducts);
                setReRenderProducts(false);
            })
            .catch(err => console.log(err))

    }, [reRenderProducts])

    return (
        <>
            <div className="productPage-main-contaner">

                <Grid contanier spacing={0}>
                    {/* card can go in here */}
                    <Grid xs={12}>
                        {cards}
                    </Grid>

                    {admin &&
                        <Grid xs={12}>
                            <Button variant="info" onClick={() => { document.getElementById('AddForm').style.display = "inline" }}>Add Product</Button>
                        </Grid>
                    }

                    <div id="AddForm" style={{ display: "inline" }}>
                        <form>
                            <h2>Add Item</h2>

                            <label> Name:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Make:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Model:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Chasis:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Year:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Part ID:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Stock:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Price:
                                <input type="text" name="name"></input>
                            </label>

                            <br></br>

                            <label> Image:
                                <input type="text" name="name"></input>
                            </label>
                        </form>
                    </div>

                </Grid>

            </div>
        </>
    )
}
export default Products