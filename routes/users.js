var express = require('express');
var router = express.Router();
// var path = require('path');

router.get('/user', (req, res, next) => {
    res.send('respond with a resource');
  });

module.exports = router;
