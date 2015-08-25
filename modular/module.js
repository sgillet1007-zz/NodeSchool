var fs = require('fs');
// console.log(process.argv);
module.exports = function(list, callback){
	var array = [];

	fs.readdir(process.argv[2], function(err, list){
		var test = list.filter(function(item){
			return item.split('.')[1] === process.argv[3];
		});
		test.forEach(function(e){
			array.push[e];
			// console.log(e);
		});
	});
	// console.log(array);
	return array;
}



