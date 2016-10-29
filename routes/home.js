const router = require('express').Router();
// const { getPoke } = require('../services/search');
// const dbService = require('../models/favorites');
// const methodOverride = require('method-override');

//connecting to views page
// router.get('/', (req,res) => {
// 	res.render('index');
// })



// home page
router.get('/', (req, res) => {
	res.render('index');
});

//directs to login
router.get('/login', (req, res) => {
	res.render('login');
});

//directs to sign up
router.get('/signup', (req, res) => {
	res.render('signup');
});



module.exports = router;
