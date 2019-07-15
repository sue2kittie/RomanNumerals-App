"use strict"

const chai = require('chai');
const expect = chai.expect;
const convert = require('../app/javascript/app.js');

describe('convert', function() {
    it('should convert number to roman numerals characters', function(){
        expect(convert(200)).to.equal('CC');
    });
});
