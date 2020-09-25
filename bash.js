//Ouput a prompt
process.stdout.write('prompt > ');
//The stdin 'data' event fires after types a line
process.stdin.on('data', (data) =>{
	const cmd = data.toString().trim(); // remove the newline
	if (cmd === 'pwd'){
		const pwd = process.cwd();
		process.stdout.write(pwd);
	}
	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
});