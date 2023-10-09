import react from 'react'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const SingleProduct = () => {
    return (
        <div className='singleproduct-page-main-con'>
            <Grid container spacing={0}>
                <Grid xs={6}></Grid>
                <Grid xs={6}>
                    <Grid xs={12}>
                        <h1>SPARE NAME</h1>
                    </Grid>
                    <Grid xs={12}>
                        <p>Car Name:</p>
                        <p>Car Make:</p>
                        <p>Chasis Number:</p>
                        <p>Year</p>
                    </Grid>
                    <Grid xs={12}>
                        <h3>Price</h3>
                    </Grid>
                    <Button>Add to Cart</Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default SingleProduct