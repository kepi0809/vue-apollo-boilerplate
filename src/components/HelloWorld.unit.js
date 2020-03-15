import HelloWorld from './HelloWorld'

describe('@components/HelloWorld', () => {
  it('exports a valid component', () => {
    expect(HelloWorld).toBeAComponent()
  })
})
