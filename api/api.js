var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello api');
});

router.get('/swing', function(req, res) {
    res.json({
        status: 'ok'
    });
});

module.exports = router;