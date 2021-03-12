var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('promise.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        // console.log(res)
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});

describe('promise - promise测试', function() {
  it('promise请求测试', function() {
    return new Promise((res, rej) => {
      // res(123)
      rej('出错了~')
    }).then((data) => {
      // expect(data).to.be.equal(123)
      expect(data).to.be.a('string')
    }).catch((err) => {
      console.log(err);
      expect(err).to.be.an('object')
    })
  });
});