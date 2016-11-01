const router 	= require('express').Router();
const { getPoke } = require('../services/search');
const { savePokes } = require('../models/faves');
const { deletePokes } = require('../models/faves');

router.get('/',  (req, res) => {
	// console.log(res.pokemon);
	res.render('results', {
		// pokes: res.pokemon || [], 
	})
});


router.get('/findPokemon', getPoke, (req, res) => {
	console.log(res.pokemon);
	res.render('results', {
	pokes: res.pokemon || [], 
	// pokesave: res.gotPoke || [],
	})
	// res.json(res.pokemon);
});

router.post('/results', savePokes, (req, res) => {
	console.log(res.pokemon);
	res.render('results', {
	pokes: res.pokemon || [], 
	// pokesave: res.gotPoke || [],
	})
	// res.json(res.pokemon);
});





module.exports	= router;

