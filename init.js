var Client = require('node-rest-client').Client;
 
var client = new Client();
var url = 'https://dejavu-api.herokuapp.com/categories/';
 
// set content-type header and data as json in args parameter 
var args = {
	data: {"name": "News", "icon": "fa-newspaper-o"},
	headers: { "Content-Type": "application/json" }
};
 
client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Business", "icon": "fa-bar-chart"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Technology", "icon": "fa-laptop"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Entertainment", "icon": "fa-film"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Sports", "icon": "fa-futbol-o"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Travel", "icon": "fa-plane"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Science", "icon": "fa-flask"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Health", "icon": "fa-heartbeat"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Arts", "icon": "fa-picture-o"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Real Estate", "icon": "fa-building-o"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Food", "icon": "fa-cutlery"};

client.post(url, args, function (data, response) {
	console.log(response);
});

args.data = {"name": "Education", "icon": "fa-graduation-cap"};

client.post(url, args, function (data, response) {
	console.log(response);
});