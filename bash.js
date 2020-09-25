//Ouput a prompt
process.stdout.write('prompt > ');
//The stdin 'data' event fires after types a line
process.stdin.on('data', (data) =>{
	const cmd = data.toString().trim(); // remove the newline
	
});

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')