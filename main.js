const square = require('./square')
const lowest = require('./lowest')
const sum = function() {return 10}

const a  = square(10)
console.log(a)
module.exports = {
    sum: sum,
    square: square,
    lowest: lowest
};

