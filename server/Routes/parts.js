const express = require('express')
const PartsSchema = require('../Models/parts')
const router = express();
const path = require('path');
const multer = require('multer');

//get all parts
router.get('/api/getparts', async(req, res) => {
    const findParts = await PartsSchema.find()
    res.json(findParts)
})

//get specific watch
router.get('/api/part/:id', async(req, res) => {
    const findPart = await PartsSchema.findById(req.params.id)
    res.json(findPart)
})

//filter make
router.get('/api/parts/:make', async(req, res) => {
    const findParts = await PartsSchema.find()
    .where("make")
    .in(req.params.make)
    res.json(findParts)
})

//filter models
router.get('/api/parts/:model', async(req, res) => {
    const findModel = await PartsSchema.find()
    .where("model")
    .in(req.params.model)
    res.json(findModel)
})


//Middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})


//add parts
router.post('/api/addparts', upload.single('image'), async(req, res) => {
    
    let data = JSON.parse(req.body.information)
    // const part = new PartsSchema({ ...req.body})
    const part = new PartsSchema({
        name: data.name,
        make: data.make,
        model: data.model,
        chasis: data.chasis,
        year: data.year,
        partID: data.partId,
        stock: data.stock,
        price: data.price,
        image: req.file.filename
    })
    await part.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//update parts
router.put('/api/parts/:id', upload.single('imageUp'), async(req, res) => {

    let data = JSON.parse(req.body.information)
    const update = ({
        name: data.name,
        make: data.make,
        model: data.model,
        chasis: data.chasis,
        year: data.year,
        partID: data.partId,
        stock: data.stock,
        image: req.file.filename
    })
    await PartsSchema.findByIdAndUpdate(req.params.id, update)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//delete
router.delete('/api/parts/:id', async(req, res) => {
    await PartsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router;