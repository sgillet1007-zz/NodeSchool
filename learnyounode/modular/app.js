var module = require('./module.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

module(dir, filterStr, function(err, list){
	if (err)
		return console.error('The following error occured: ', err)

	list.forEach(function (file) {
		console.log(file)
	})
})