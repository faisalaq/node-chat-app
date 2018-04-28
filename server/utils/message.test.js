var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = 'Faisal';
        var text = 'hi there, its Faisal';
        var genMsg = generateMessage(from, text);
        expect(genMsg.createdAt).toBeA('string');
        expect(genMsg).toInclude({
            from,
            text
        });
    })
})