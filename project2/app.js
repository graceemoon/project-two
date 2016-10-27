const express	= require('express');
const logger 	= require('morgan');

//connect to routes files
const homeRoute	= require('./routes/home');
const bookRoute = require('./routes/books');
const faveRoute	= require('./routes/faves');


//initializing express
const app 		= express();
//what port to listen on
const port		= process.env.PORT || 3000;

//middleware being used
app.use(logger('dev'));
//
app.use('/', homeRoute);
app.use('/books', bookRoute);
app.use('/faves', faveRoutes);



//declare views
app.set('view engine', 'ejs');
app.set('views', './views');


//app will listen on this port
app.listen(port,() => console('Server running on port', port));


