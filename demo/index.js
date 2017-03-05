import {hello, Foo} from '../src'

const foo = new Foo({baz: 'NPM'})

const d = global.document
const el = d.createElement('h3')
el.innerHTML = hello(foo.baz())
d.body.appendChild(el)
