import hello from '../src'

const d = global.document
const h1 = d.createElement('h1')
h1.innerHTML = hello('world')
d.body.appendChild(h1)
