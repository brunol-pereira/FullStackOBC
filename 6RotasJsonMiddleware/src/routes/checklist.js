const express = require('express');

const router = express.Router();

//Method GET
router.get('/', (req, res) => {
    console.log('Ola');
    res.send();
})

//Pass request with param
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
})

//Method POST
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

//Method PUT
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})

//Method DELETE
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;