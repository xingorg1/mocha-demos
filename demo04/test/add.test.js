import add from '../src/add.js';
import chai from 'chai';
import 'babel-polyfill';

let expect = chai.expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 3', function() {
    expect(add(1, 1)).to.be.equal(3);
  });
});
