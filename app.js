const express	= require('express');
const logger 	= require('morgan');

//connect to routes files
const homeRoute	= require('./routes/home');
const searchRoute = require('./routes/search');
const pokeRoute	= require('./routes/poke');


//initializing express
const app 		= express();
//what port to listen on
const PORT		= process.argv[2] || process.env.PORT || 3000;


//declare views
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware being used
app.use(logger('dev'));
//
app.use('/', homeRoute);
app.use('/search', searchRoute);
app.use('/poke', pokeRoutes);


//app will listen on this port
app.listen(PORT,() => console('Server running on port', PORT));


