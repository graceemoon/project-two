// const { MongoClient }	= require('mongodb');
// const { ObjectID }	 	= require('mongodb');
// const dbCOnnection		= 'mongodb://localhost:27017/pokemon';

// function getPokes(req, res, next) {
// 	MongoClient.connect(dbCOnnection, (err, db) => {
// 		if (err) return next(err);

// 		db.collection('faves')
// 		.find({})
// 		.sort({pokeName: 1 }) //what is this?
// 		.toArray((err, result) => {
// 			if (err) return next(err);

// 			res.gotPokes = result;
// 			db.close();
// 			return next();
// 		});
// 		return false;
// 	});
// 	return false;
// }

// //function savePokes(req, res, next) {};



// //function deletePokes(req, res, next) {};



// // module.exports = {
// // 	getPokes,
// // 	savePokes,
// // 	deletePokes,
// // };