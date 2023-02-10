const os = require('os')

//Info about curren user
const user = os.userInfo()
console.log(user)

//System up-time
const uptime = os.uptime()
console.log(`Total System uptime = ${uptime} seconds`)

const currOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currOS)