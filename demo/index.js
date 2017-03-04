import {hello} from '../src'

const d = global.document
const el = d.createElement('h3')
el.innerHTML = hello('world')
d.body.appendChild(el)
