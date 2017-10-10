const express = require('express'),
      models  = require('../models');

const router = express.Router();

router.get('/users', function(req, res, next){
  models.User.findAll().then(users => {
    res.json(users);
  });
})

module.exports = router;
