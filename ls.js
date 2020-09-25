const fs = require('fs');

let lsFunc = process.stdin.on('data', (data) =>{
	const cmd = data.toString().trim(); // remove the newline

  if (cmd === 'ls'){
		fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write("prompt > ");
      }
    });
		//process.stdout.write(ls);
  }
  //process.stdout.write('\nprompt > ');
})


module.exports = lsFunc;