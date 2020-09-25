const fs = require('fs');

let catFunc = process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim(); // remove the newline
  cmdSplit = cmd.split(' ');
	if (cmdSplit[0] === 'cat'){
    fs.readFile(cmdSplit[1], (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    }) 
  } 
  process.stdout.write('\nprompt > ');
})

module.exports = catFunc;