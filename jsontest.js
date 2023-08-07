const fs = require("fs")
fs.readFile("json1.json", function(err,jsondata){
	if(err) throw err;
	console.log('\n Json file content')
	console.log(JSON.parse(jsondata));
});
fs.readFile("akshay.txt", function(err,txtdata){
	if(err) throw err;
	console.log('\n txt file content')
	console.log(txtdata.toString());
});
fs.readFile("test.html", function(err,htmldata){
	if(err) throw err;
	console.log('\n html file content')
	console.log(htmldata);
});







