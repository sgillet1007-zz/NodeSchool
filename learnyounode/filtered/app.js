var fs = require('fs');
// console.log(process.argv);
fs.readdir(process.argv[2], function(err, list){
	// for (var i = 0; i < list.length; i++) {
	// 	list[i]
	// 	if (list[i].split('.')[1] === 'md'){
	// 		console.log(list[i])
	// 	}
	// };
	console.log("process.argv:",process.argv);
	var test = list.filter(function(item){
		return item.split('.')[1] === 'md'
	});
	// test.forEach(function(e){
	// 	console.log(e);
	// })
});