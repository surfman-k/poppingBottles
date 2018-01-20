var assert = require("chai").assert;
var poppingBottles = require("../poppingBottles");

describe("Popping Bottles", function() {
  it("Should return a string with all poppingBottles information.", function() {
    var cash = 40;
    var result = poppingBottles(cash);
    assert.isString(result);
  });
  
});

