const waitTime = 3000; // 3 sec
const waitInterval = 500; // 0.5 sec
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log('done')
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
