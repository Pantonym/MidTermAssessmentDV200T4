const express = require('express')
const InvoiceSchema = require('../models/invoice')
const router = express();

//get all orders
router.get('/api/getorders', async(req, res) => {
    const findorders = await InvoiceSchema.find()
    res.json(findorders)
})

//add orders
router.post('/api/addorders', async(req, res) => {
    const order = new InvoiceSchema({ ...req.body})
    await order.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

// //update orders
// router.put('/api/orders/:id', async(req, res) =>{
//     await OrderSchema.findByIdAndUpdate(req.params.id, req.body)
//         .then(response => res.json(response))
//         .catch(error => res.status(500).json(error))
// })

//delete
router.delete('/api/orders/:id', async(req, res) => {
    await InvoiceSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router;