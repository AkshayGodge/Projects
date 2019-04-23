const fs = require('fs'); // load file system modlue

var rawObj = fs.readFileSync('dept_manager.json') //import the raw JSON table
var parsObj = JSON.parse(rawObj); // parse the data to key value pairs

var stringObj = JSON.stringify(parsObj); // stringify the object
console.log(typeof stringObj); // show that is of type string
console.log(stringObj);	// print the string on the console