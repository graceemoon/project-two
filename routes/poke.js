const router = require.('express').Router();

router.get('/', (req,res) => {
	res.render('poke', {
		poke: res.pokedex;
	});
});

module.exports = router;