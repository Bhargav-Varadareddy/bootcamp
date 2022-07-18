var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the Books page!');
});

module.exports = router;

router.get('/search', function(req, res, next) {
	res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
});

router.post('/add', function (req, res, next) {
	console.info(req.body);
	res.status(200).json({ message:  "Book Saved Successfully" });
});

router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.info(id);
	res.status(200).json({ message:  "Book Found" });
});

router.get('/add', function(req, res, next) {
  res.render('addbook', {title : 'Add a Book'});
});

router.post('/add/added', function(req, res, next) {
  console.log(req.body)
  res.render('addedbook', {title : 'Book Added'});

});

router.get('/add/added', function(req, res, next) {
  console.log(req.query)
  res.render('addedbook', {title : 'Book Added'});

});