'use strict';

var expect = require('chai').expect;
var fun = require('../lib/pattern_match').fun;
var $ = require('../lib/pattern_match').$

describe('#fun', function() {
  it('create a valid factorial function', function() {
    var fact = fun(
      [0, function()  { return 1; } ],
      [$, function(n) { return n * fact(n - 1); } ]
    );
    expect(fact(10)).to.equal(3628800);
  });
});
