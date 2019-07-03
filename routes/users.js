var express = require('express');
var router = express.Router();
// var path = require('path');

router.get('/user', (req, res, next) => {
    res.render('index', { title: Users});
  });

module.exports = router;
