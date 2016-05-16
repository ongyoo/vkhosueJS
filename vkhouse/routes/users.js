var express = require('express');
var router = express.Router();
var user = [
	{
		"id": 1,
		"username": "admin",
		"name": "Komsit Admin",
		"role": "Admin VK House"
	}
];

exports.findAll = function() {
	return user;
};

exports.findById = function (id) {
	for (var i = 0; i < user.length; i++) {
		if (user[i].id == id) return user[i];
	}
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"test" : "ทดสอบ"});
});

router.get('/user', function (req, res, next) {
	//res.send('respond with a resource  /user');
	db.users.find(function(err, docs) {
		res.send(err);
		res.json(docs);
	});
});

module.exports = router;
