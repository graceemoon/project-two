const fetch	= require('node-fetch');

const API_URL = 'http://pokeapi.co/api/v2/';

function getPoke(req, res, next) {
	fetch(`${API_URL}pokemon/${req.query.name}`)
	.then(r => r.json())
	.then((result) => {
		console.log(result)
		res.pokemon = result;
		next();
	})
	.catch((err) => {
		res.err = err;
		next();
	});
}

module.exports = { getPoke };