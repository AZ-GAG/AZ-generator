const readline = require('readline');
const getGag = require('./lib.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: process.stdin.isTTY,
});

let [question, answer] = getGag();
let isWaiting = false;

process.stdout.write('\u001b[2J\u001b[0;0f');
console.log(`질문: ${question}`);

rl.on('line', (line) => {
  if (isWaiting)
    return;
  console.log(`정답: ${answer}`);
  ([question, answer] = getGag());
  isWaiting = true;
  setTimeout(() => {
    process.stdout.write('\u001b[2J\u001b[0;0f');
    console.log(`질문: ${question}`);
    isWaiting = false;
  }, 1000);
});

rl.on('close', () => {
  console.log(`정답: ${answer}`);
});
