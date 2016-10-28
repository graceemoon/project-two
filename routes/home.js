const router = require('express').Router();

//connecting to views page
router.get('/', (req,res) => {
	res.render('index');
})

module.exports = router;