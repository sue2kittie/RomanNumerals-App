"use strict";

const chai = require("chai");
const expect = chai.expect;
const convert = require("../app/javascript/app.js");

describe("convert number to Roman Numerals", function() {
  it("Should convert zero to null as zero has no valye in Roman Numerals", () => {
    expect(convert(0)).equal("");
  });
  it("should convert a one number digit to roman numerals value", () => {
    expect(convert(3)).to.equal("III");
  });
  it("should convert two digit number to its Roman numerl value", () => {
    expect(convert(22)).to.equal("XXII");
  });
  it("should convert a three number to roman numerals characters", function() {
    expect(convert(200)).to.equal("CC");
  });
  it("should convert a four digit number to its Roman numeral correpsonding value", () => {
    expect(convert(3999)).to.equal("MMMCMXCIX");
  });
});
