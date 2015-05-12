var render = require('./render');
var logger = require('koa-logger');
var route = require('koa-route');
var serve = require('koa-static');
var koa = require('koa');
var app = module.exports = koa();

// middleware

app.use(logger());

// route middleware

app.use(route.get('/', index));
app.use(serve(__dirname + '/public'));

// route definitions

function *index() {
	this.body = yield render('FinalProject-Home', {});
}

if (!module.parent) {
	app.listen(8080);
	console.log('Final Project is listening on port 3001');
}