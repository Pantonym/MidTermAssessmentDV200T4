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

    const [pname, setName] = useState();
    const [pmake, setMake] = useState();
    const [pmodel, setModel] = useState();
    const [pchasis, setChasis] = useState();
    const [pyear, setYear] = useState();
    const [ppartID, setPartId] = useState();
    const [pstock, setStock] = useState();
    const [pprice, setPrice] = useState();
    const [pimage, setImage] = useState();

    const addPart = (e) => {
        const payload = new FormData()

        let details = {
            name: pname,
            make: pmake,
            model: pmodel,
            chasis: pchasis,
            year: pyear,
            partID: ppartID,
            stock: pstock,
            price: pprice
        }

        payload.append('information', JSON.stringify(details));
        payload.append('image', pimage);

        Axios.post('http://localhost:5000/api/addpart', details);

        setReRenderProducts(true);
    }
    
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
                    <div>
                        <Button variant="info" onClick={() => {
                            document.getElementById('CartPopup').style.width = '200px';
                            document.getElementById('content').style.display = 'inline';
                        }}>View cart</Button>
                    </div>

                    <div id="CartPopup" style={{ width: "0px", position: 'top' }}>
                        <div id="content" style={{display: 'none'}}>
                            <h1>Name</h1>
                        </div>
                    </div>

                    <br></br>

                    {/* card can go in here */}
                    <Grid xs={12}>
                        {cards}
                    </Grid>

                    {admin &&
                        <Grid xs={12}>
                            <Button variant="info" onClick={() => { document.getElementById('AddForm').style.display = "inline" }}>Add Product</Button>
                        </Grid>
                    }

                    <div id="AddForm" style={{ display: "inline" }} onSubmit={addPart}>
                            <h2>Add Item</h2>

                            <label> Name:
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Make:
                                <input type="text" name="make" onChange={(e) => setMake(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Model:
                                <input type="text" name="model" onChange={(e) => setModel(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Chasis:
                                <input type="text" name="chasis" onChange={(e) => setChasis(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Year:
                                <input type="text" name="year" onChange={(e) => setYear(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Part ID:
                                <input type="text" name="partID" onChange={(e) => setPartId(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Stock:
                                <input type="Number" name="stock" onChange={(e) => setStock(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Price:
                                <input type="Number" name="price" onChange={(e) => setPrice(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <label> Image:
                                <input type="file" name="image" onChange={(e) => setImage(e.target.value)} ></input>
                            </label>

                            <br></br>

                            <button style={{fontSize: "24px", padding: '5px'}} onClick={addPart} > Add </button>
                    </div>

                </Grid>

            </div>
        </>
    )
}
export default Products