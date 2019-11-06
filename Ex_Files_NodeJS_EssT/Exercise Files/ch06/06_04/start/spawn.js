const cp = require('child_process');

const questionApp = cp.spawn('node', ['questions.js']);

questionApp.stdin.write('me \n');
questionApp.stdin.write('there \n');
questionApp.stdin.write('no \n');

questionApp.stdout.on('data', data => {
  console.log(`from the question app: ${data}`);
})

questionApp.on('close', () => {
  console.log(`questionApp process exited`);
})
