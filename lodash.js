const _ = require('lodash')
const data = [1,[2,[3,[4,[5]]]]]
const v = _.flattenDeep(data)
console.log(v)
console.log('hello world')