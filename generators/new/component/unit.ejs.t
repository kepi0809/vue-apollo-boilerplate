---
to: "src/components/<%= h.changeCase.pascal(name) %>.unit.js"
---
<%
  let fileName = h.changeCase.pascal(name)
%>import <%= fileName %> from './<%= fileName %>'

describe('@components/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= fileName %>).toBeAComponent()
  })
})
