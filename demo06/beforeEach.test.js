var expect = require('chai').expect;

describe('beforeEach示例', function () {
  var foo = false;

  before(function () {
    // 在本区块的每个测试用例之前执行
    console.log('before');
  });

  beforeEach(function () {
    console.log('beforeEach');
    foo = true;
  });

  it('修改全局变量应该成功', function () {
    expect(foo).to.be.equal(true);
  });

  afterEach(function () {
    // 在本区块的每个测试用例之后执行
    console.log('afterEach');
  });
  after(function () {
    // 在本区块的所有测试用例之后执行
    console.log('after');
  });
  
});
