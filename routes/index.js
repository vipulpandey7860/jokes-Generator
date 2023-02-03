var express = require('express');
var router = express.Router();

// import { joke } from '../public/javascripts/jokes';

let joke = require('../public/javascripts/jokes')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/jokes', function (req, res, next) {
  
  let randomNumber = Math.floor(Math.random() * 15)
  res.send(joke.joke[randomNumber])

})

module.exports = router;
