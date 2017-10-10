const express = require('express'),
      models  = require('../models');


router.get('/users', function(req, res, next){
  models.User.findAll().then(users => {
    res.json(users);
  });
})
