var mongojs = require('mongojs');

var databaseUrl = 'vkhouse_DB';
var collections = ['users', 'clubs'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};