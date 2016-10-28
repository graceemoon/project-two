const router 	= require('express').Router();
const { getPokemon } = require('../services/search');
// const dbService = require('../models/favorites');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.post('/search', (req, res) => {
	res.render('search', {
		pokes: res.pokenames || [],
	});
});


module.exports	= router;

