import test from 'ava'
import {Foo} from '..'

test('foo.bar() returns a string', t => {
  const foo = new Foo()
  t.true(typeof foo.bar() === 'string')
})

test('foo.bar() returns "bar"', t => {
  const foo = new Foo()
  t.true(foo.bar() === 'bar')
})

test('foo.baz({baz: "baz"}) returns "baz"', t => {
  const foo = new Foo({baz: 'baz'})
  t.true(foo.baz() === 'baz')
})

test('foo.baz({baz: "hello"}) returns "hello"', t => {
  const foo = new Foo({baz: 'hello'})
  t.true(foo.baz() === 'hello')
})

test('foo.baz() returns undefined', t => {
  const foo = new Foo()
  console.log(typeof foo.baz())
  t.true(typeof foo.baz() === 'undefined')
})
