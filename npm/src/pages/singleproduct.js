import react from 'react'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const SingleProduct = () => {
    const id = sessionStorage.getItem('ProductID');
    console.log("Productid " + id);
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [quan, setQuan] = useState(1);
  
    // load data from db using product id in session storage
    useEffect(() => {
      Axios.get('http://localhost:5000/api/watch/' + id)
        .then(result => {
          setProduct(result.data);
        })
        .catch(err => console.log(err));
  
    }, []);

    const handleAddCart = (key, name, make, model, price, image, ) => {
        const newItem = { key: key, name: name, make: model, image: image,price: price , quantity: quantity}
        const existingCart = JSON.parse(sessionStorage.getItem('Cart')) || [];
        const updatedCart = [...existingCart, newItem];
        setCart(updatedCart);
        sessionStorage.setItem('Cart', JSON.stringify(cart));
        console.log(sessionStorage.getItem('Cart'));
      };
    return (
        <div className='singleproduct-page-main-con'>
            <Grid container spacing={0}>
                <Grid xs={6}></Grid>
                <Grid xs={6}>
                    <Grid xs={12}>
                        <h1>{product.name}</h1>
                    </Grid>
                    <Grid xs={12}>
                        <p>{product.make}:</p>
                        <p>{product.model}:</p>
                        <p>{product.chasis}:</p>
                        <p>{product.year}</p>
                    </Grid>
                    <Grid xs={12}>
                        <h3>{product.price}</h3>
                    </Grid>
                    <Button onClick={() => handleAddCart(product._id, product.name, product.make, product.model, product.price, product.image)} >Add to Cart</Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default SingleProduct