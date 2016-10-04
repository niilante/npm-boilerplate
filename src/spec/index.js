/* eslint-env jest */

import hello from '..'

describe('hello', () => {
  it('returns a string', () => {
    expect(typeof hello()).toEqual('string')
  })

  it('allows setting a name', () => {
    expect(hello('World')).toEqual('Hello World')
  })
})
