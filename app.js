const dotEnv			= require('dotenv').config({silent: true});
const express			= require('express');
const logger 			= require('morgan');
const bodyParser 		= require('body-parser');
const path				= require('path');
const session			= require('express-session');
const cookieParser		= require('cookie-parser');
const methodOverride	= require('method-override');



//connect to routes files
const homeRoute			= require('./routes/home');
const authRoute			= require('./routes/auth');
const userRoute			= require('./routes/users');
const searchRoute 		= require('./routes/search');
const resultsRoute		= require('./routes/results');
const favesRoute 		= require('./routes/faves');


//initializing express
const app 				= express();
const SECRET 			='tacos3000';
//what port to listen on
const PORT				= process.env.PORT || 3000;


//declare views
app.set('view engine', 'ejs');
app.set('views', 'views');

//middleware being used
app.use(logger('dev'));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: SECRET,
}));


app.use('/', homeRoute);
app.use('/search', searchRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/results', resultsRoute);
app.use('/faves', favesRoute);
// app.use('/search/:id', searchRoute);



//app will listen on this port
app.listen(PORT, () => console.log('Server running on port', PORT));


