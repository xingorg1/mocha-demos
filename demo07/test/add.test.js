var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it.only('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it.skip('这个测试用例会被跳过', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
