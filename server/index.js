const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const partsRoute = require('./routes/parts');
const { path } = require('path');

require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware
app.use(express.static('images'));
app.use('/images', express.static('images'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/parts', partsRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: '', //Collection Name
}).then(() => console.log("Connected to GlenSpares"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server has started at port: ${PORT}`)});