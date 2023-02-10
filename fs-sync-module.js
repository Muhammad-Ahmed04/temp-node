const { readFileSync, writeFileSync} = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first,second);
writeFileSync('./content/result.txt', `Here is the Result: ${first}, ${second}`,
{flag: 'a'}
)
console.log('Done with task');
console.log('Starting the next task');
