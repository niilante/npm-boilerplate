/**
 * hello world function. Returns Hello + `name`
 * @param  {string} [name='World'] the `name` to use (defaults to `'World'`)
 * @returns {string} returns 'Hello' + `name`
 */
const hello = (name = 'World') => `Hello ${name}`

export {hello}

export default {hello}
