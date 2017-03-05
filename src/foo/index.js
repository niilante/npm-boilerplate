class Foo {
  /**
   * a simple class example
   */
  constructor(props = {}) {
    this.props = props
  }
  /**
   * a simple method
   * @returns {string} always returns 'bar'
   */
  bar() {
    return 'bar'
  }
  /**
   * a method that relies on props
   * @returns {undefined|string} returns props.baz if set
   */
  baz() {
    return this.props.baz
  }
}

export {Foo}

export default {Foo}
