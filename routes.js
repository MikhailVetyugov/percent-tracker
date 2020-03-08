const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.post('/', function (req, res) {
    res.send('Got a POST request');
});

module.exports = router;
