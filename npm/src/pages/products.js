import React from "react";
import './products.css';

import { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';

// Import Axios
import Axios from "axios";

import ProductCard from "../Components/ProductCard";

const Products = () => {

    const [cards, setCards] = useState();
    const [reRenderProducts, setReRenderProducts] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/getparts')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                let renderProducts = productData.map((item) =>
                    <ProductCard key={item._id} id={item.partID} name={item.name} make={item.make} model={item.model} chasis={item.chasis} year={item.year} price={item.price}
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
                </Grid>

            </div>
        </>
    )
}
export default Products