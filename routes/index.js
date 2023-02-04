var express = require('express');
var router = express.Router();

// import { joke } from '../public/javascripts/jokes';

let joke = require('../public/javascripts/jokes')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/jokes/:index', function (req, res, next) {

  if (req.params.index < 10) {
    res.send(joke.joke[req.params.index])
  }

  else {

    let randomNumber = Math.floor(Math.random() * 10)
    res.send(joke.joke[randomNumber])
  }


})


module.exports = router;
