const {readFile, writeFile} = require('fs')
console.log('Start')
readFile('./content/first.txt', 'utf-8', (err,result) => {
    if(err){
        console.log(err);
    }
    const first = result
    readFile('./content/first.txt', 'utf-8', (err,result) => {
        if(err){
            console.log(err);
        }
        const second = result
        writeFile('./content/result-async.txt',`Here is the Result: ${first}, ${second}`, (err,result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Done With This Task');
            }
        )
    })
})
console.log('Starting Next Task')