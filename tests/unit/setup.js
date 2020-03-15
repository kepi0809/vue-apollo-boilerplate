const vueTestUtils = require('@vue/test-utils')
// ===
// Console handlers
// ===

// Make console.error throw, so that Jest tests fail
const error = console.error
console.error = function(message) {
  error.apply(console, arguments)
  // NOTE: You can whitelist some `console.error` messages here
  //       by returning if the `message` value is acceptable.
  throw message instanceof Error ? message : new Error(message)
}

// Make console.warn throw, so that Jest tests fail
const warn = console.warn
console.warn = function(message) {
  warn.apply(console, arguments)
  // NOTE: You can whitelist some `console.warn` messages here
  //       by returning if the `message` value is acceptable.
  throw message instanceof Error ? message : new Error(message)
}

// ===
// Global helpers
// ===

// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount

// A special version of `shallowMount` for view components
global.shallowMountView = (Component, options = {}) => {
  return global.shallowMount(Component, {
    ...options,
    stubs: {
      Layout: {
        functional: true,
        render(h, { slots }) {
          return <div>{slots().default}</div>
        },
      },
      ...(options.stubs || {}),
    },
  })
}
