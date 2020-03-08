const express = require('express');
const getConnectionString = require('./connection-string');

const router = express.Router();

router.get('/', async function (req, res) {
    await getConnectionString();
    res.send('Welcome to percent tracker!');
});

router.get('/investments', function (req, res) {
    res.send('getting all...');
});

router.post('/investments/result', function (req, res) {
    const {
        date,
        totalPrice,
        name,
        broker,
        country,
        type,
        user
    } = req.body;

    res.send('Got a POST request');
});

router.post('/investment/dividends', function(req, res) {
    res.send('dividends...');
});

router.post('/investments/input', function(req, res) {
    res.send('profitability...');
});

router.post('/investments/output', function(req, res) {
    res.send('Not implemented yet...');
});

module.exports = router;
