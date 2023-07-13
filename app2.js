const modules = require('./modules')
const sayHi = require('./function')
sayHi(modules.kname)
sayHi(modules.name)
// the invoked is in other file but call in app js
require('./mind-grenade')