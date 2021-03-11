var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});

describe('加法函数的测试2', function() {
  it('2 加 3 应该 不等于 4', function() {
    expect(add(2, 3)).to.be.not.equal(4);
  });
});