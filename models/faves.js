// const { MongoClient }	= require('mongodb');
const { ObjectID }	 	= require('mongodb');
const { getDB }			= require('../lib/dbConnect.js');
const dbConnection		= 'mongodb://localhost:27017/pokemon';

function getPokes(req, res, next) {
	getDB().then((db) => {
		db.collection('favorites')
		.find({ userId: {$eq: req.session.userId}})
		.toArray((toArrayError, data) => {
			if(toArrayError) return next(toArrayError);
			res.favorites = data;
			db.close();
			next();
		});
		return false;
	});
	return false;
}

//function savePokes(req, res, next) {};
function savePokes(req, res, next) {
	//create empty obj
	const insertObj = {};

	//copy all of req.body
	for(key in req.body) {
		insertObj[key] = req.body[key];
	}
	insertObj.favorite.userId = req.session.userId;

	getDB().then((db) => {
		db.collection('faves')
		.insert(insertObj.favorite, (insErr, result) => {
			if(insErr) return next (insErr);
			res.saved = result;
			db.close();
			next();
		});
		return false;
	});
	return false;
}


//function deletePokes(req, res, next) {};
function deletePokes(req, res, next) {
	getDB().then((db) => {
		db.collection('faves')
		.remove({_id: ObjectID(req.params.id)}, (remErr, results) => {
			if(remErr) return next(remErr);
			res.removed = result;
			db.close();
			next();
		});
		return false;
	});
	return false;
}


module.exports = {
	getPokes,
	savePokes,
	deletePokes,
};