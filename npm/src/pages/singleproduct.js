import { Grid } from "@mui/material/node"

import Button from '@mui/material/Button';


const SingleProduct = () => {
    <>
    <div className="singleProduct-page-main-con">
        <Grid container spacing={0}>
            {/* column one  */}
            {/* the image con  */}
            <Grid xs={6}>

            </Grid>
            {/* column two */}
            <Grid xs={6}>
                <h1>Spare Name</h1>
                <p>Car Name:</p>
                <p>Car Make:</p>
                <p>Chasis Number:</p>
                <p>Price:</p>
                <Button/>
            </Grid>
        </Grid>
    </div>
    </>
}
export default SingleProduct