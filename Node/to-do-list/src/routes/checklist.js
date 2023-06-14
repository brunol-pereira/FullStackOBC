const express = require('express');

const router = express.Router();

//Method GET
router.get('/', (req, res) => {
    console.log('Ola');
    res.send();
})

//Method POST
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

//Pass request with param
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
})

module.exports = router;