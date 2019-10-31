const fs = require('fs');

const md = `
# this is a new file

we can write text to a files with fs.writeFile

* fs.readdir
* fs.radFile
* fs.writeFile

`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
  if (err) {
    throw err;
  }
  console.log('file saved');
})
