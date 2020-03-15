---
to: "src/views/<%= h.changeCase.pascal(name) %>.unit.js"
---
<%
  const fileName = h.changeCase.pascal(name)
%>import <%= fileName %> from './<%= fileName %>'

describe('@views/<%= fileName %>', () => {
  it('is a valid view', () => {
    expect(<%= fileName %>).toBeAViewComponent()
  })
})
