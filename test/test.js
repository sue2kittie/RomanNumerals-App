"use strict"

const chai = require('chai');
const expect = chai.expect;
//const sut = require('../app/javascript/app.js');


const convert = function (number) {
    let romanArray = ['', 'I', 'II', 'II', 'III', 'IV', 'V'];
    let result = romanArray[number];
    return result;
}


describe('convert', function() {
    it('should convert number to roman numerals characters', function(){
        expect(convert(2)).to.equal('II');
    });
});
