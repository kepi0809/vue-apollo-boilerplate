import Home from './Home.vue'

describe('@views/Home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })
})
