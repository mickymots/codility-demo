const assert = require('assert');
const main = require('../main')
const test_data = require('./test-data')
const array_test_data = require('./array-test-data')

describe('simple load check', ()=>{
    it('should return 10', ()=>{
        const sum = main.sum()
        assert.equal(sum, 10)
    })

})


test_data.data.forEach(input =>{

    describe('Should give square of ' + input.question, () => {
            it('should be ' + input.answer, () => {
    
                assert.equal(main.square(input.question), input.answer);
            });
        })
    
    
})

array_test_data.data.forEach(input =>{

    describe('Should give lowest positive not in ' + input.question, () => {
            it('should be ' + input.answer, () => {
    
                assert.equal(main.lowest(input.question), input.answer);
            });
        })
    
    
})

