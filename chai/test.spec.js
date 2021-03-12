
const chai = require('chai');
const expect = chai.expect;

describe('not', () => {
  it('not throw', () => {
    const fun = function () {
      // throw '23'
      return 1
    }
    expect(fun).to.not.throw();
  });
  it('object not have property', () => {
    expect({ a: 1 }).to.not.have.property('b')
  });
  it('array not include', () => {
    expect([2, 4]).to.be.an('array').not.include(3)
    // 官网给的正确写法如下：反倒是运行不通过？
    // expect([1, 2]).to.be.an('array').that.does.not.include(3);
  });
});

describe('deep标记-deeply (but not strictly) ', () => {
  it('Target object deeply (but not strictly) equals another object', () => {
    expect({ a: { b: 1 } }).to.deep.equal({ a: { b: 1 } })
  });
  it('deep propertys', () => {
    expect({ a: { b: 1 } }).to.have.deep.property('a.b')
    // expect({a : {b: 1}}).to.deep.have.property('a.b') // 这两种写法，顺序不一样，但是结果一样
  });
  it('反斜杠转义', () => {
    var deepCss = { '.link': { '[target]': 42 } }
    // 第一个反斜杠是在字符串参数中对第二个反斜杠进行转义，第二个反斜杠用于在property中进行转义
    expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42)
  });
  it('demo', () => {
    // Target object deeply (but not strictly) equals `{a: 1}`
    // expect({ a: 1 }).to.deep.equal({ a: 1 });
    // expect({ a: 1 }).to.not.equal({ a: 1 });

    // Target array deeply (but not strictly) includes `{a: 1}`
    // expect([{ a: 1 }]).to.deep.include({ a: 1 });
    // expect([{ a: 1 }]).to.include({ a: 1 });
    // expect([{ a: 1 }]).to.not.include({ a: 2 });

    // // Target object deeply (but not strictly) includes `x: {a: 1}`
    // expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
    // expect({ x: { a: 1 } }).to.not.include({ x: { a: 1 } });
    // expect({ x: { a: 1 } }).to.not.include({ x: { a: 2 } });

    // // Target array deeply (but not strictly) has member `{a: 1}`
    expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
    // expect([{ a: 1 }]).to.not.have.members([{ a: 1 }]);

    // // Target set deeply (but not strictly) has key `{a: 1}`
    // expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    // expect(new Set([{ a: 1 }])).to.not.have.keys([{ a: 1 }]);

    // // Target object deeply (but not strictly) has property `x: {a: 1}`
    // expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
    // expect({ x: { a: 1 } }).to.not.have.property('x', { a: 1 });

  })
});

describe("others", () => {
  it('any 、 all', () => {
    const foo = {
      bar: '1',
      zoo: '2'
    }
    expect(foo).to.have.any.keys('bar', 'baz')
    // expect(foo).to.have.all.keys('bar', 'baz')
  });

  it('.a(type) / .an(type)', () => {
    // typeof 类型断言
    expect('test').to.be.a('string');
    expect([]).to.be.an('array')
    expect({ foo: 'bar' }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    expect(null).to.be.not.an('undefined');
    expect(null).to.be.not.equal(undefined) // 严格相等
    expect(NaN).to.be.not.a('NaN');
    expect(new Error).to.be.an('error');
    expect(new Promise((res) => { res() })).to.be.a('promise'); // Promise resolver undefined is not a function
    expect(new Float32Array()).to.be.a('float32array');
    expect(Symbol()).to.be.a('symbol'); // typeof Symbol() => 'symbol'

    // // es6 overrides
    expect({ [Symbol.toStringTag]: 'Foo' }).to.be.a('foo');

    // // language chain
    expect([]).to.be.an.instanceof(Array);
  });

  it('.include(value) / contains(value)', () => {
    // value：Object | String | Number
    // include()和contains()即可作为属性类断言前缀语言链又可作为作为判断数组、字符串是否包含某值的断言使用。
    expect([1, 2, 3]).to.include(2)
    expect('foobar').to.include('bar')
    // 当作为语言链使用时，常用于key()断言之前
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo')
  })
})


