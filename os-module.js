const os = require('os')
// console.clear()
// console.log(os)

// info about user
// const user = os.userInfo()
// console.log(user)

// methods return the system uptime in seconds
// console.log(os.uptime()/60)

// console the x86
// console.log(os.arch())

// tells the computer processor
// console.log(os.cpus())

// tell the free mem 
// console.log((os.freemem()/12400000).toFixed())

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.table(currentOs)