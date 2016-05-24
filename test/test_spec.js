'use strict';
const objectShell = require('../dist/index.js')


describe('get', function() {
  it('get `/a/b`', () => {
    let data = { a: b: { c: 1 } }
    let ret = objectShell.get(data, '/a/b')
    expect(ret).toEqual({ c: 1 })
  })

  it('get `/a/b/c/../`', () => {
    let data = { a: b: { c: 1 } }
    let ret = objectShell.get('/a/b/c/../../')
    expect(ret).toEqual({ b: { c: 1 } })
  })

  it('get `/a/b/c/../`', () => {
    let data = { a: b: { c: 1 } }
    let ret = objectShell.get('/a/b/c/../../../../../../../')
    expect(ret).toEqual(data)
  })

  it('get `unhint`', () => {
    let data = {}
    let ret = objectShell.get(data, `/fdasfasf/${Math.random()}`)
    expect(ret).toEqual(null)
  });
});

describe('set', function() {
  it('set `/b/c/d`', () => {
    let data = {}
    objectShell.set(data, '/b/c/d', { name: '一日' });
    expect(data).toEqual({
      b: {
        c: {
          d: { name: '一日' }
        }
      }
    });
  });
});

describe('swap', () => {
  it('swap `/a/0', '/a/1`', () => {
    let data = {
      a: [{ name: '浩知' }, { name: '一日' }]
    }
    objectShell.swap(data, '/a/0', '/a/1');
    expect(data).toEqual({
      a: [{ name: '一日' }, { name: '浩知' }]
    })
  });
});
