---
to: "src/layouts/<%= h.changeCase.pascal(name) %>.unit.js"
---
<%
  const fileName = h.changeCase.pascal(name)
%>import <%= fileName %> from './<%= fileName %>'

describe('@layouts/<%= fileName %>', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(<%= fileName %>, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
