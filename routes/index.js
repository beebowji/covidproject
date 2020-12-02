var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/travel', function(req, res, next) {
  res.render('travel', { title: 'travel' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.get('/covid', function(req, res, next) {
  res.render('covid', { title: 'covid' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'gallery' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
