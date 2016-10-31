const router 	= require('express').Router();
const { getPoke } = require('../services/search');
// // const dbService = require('../models/favorites');
// const methodOverride = require('method-override');

// router.use(methodOverride('_method'));

router.get('/', getPoke, (req, res) => {
	console.log(res.pokemon);
	res.render('search', {
		pokes: res.pokemon || [] 
		// pokesave: res.gotPoke || [],
	})
});

// router.post('/search', (req, res) => {
// 	res.render('search', {
// 		pokes: res.pokemon,
// 	});
// });


// //need to grab indivi pokemon
// router.get('/:id', getPoke, (req, res) => {
// 	    	 console.log(res.album);
//   res.render('search', {
//     // pokemon: res.album || [],
//     poke: req.params.id || [],
//   });
// });

//req.params. ...
//linking other pokemon pages

module.exports	= router;

