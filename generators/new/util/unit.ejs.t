---
to: "src/utils/<%= h.changeCase.camel(name) %>.unit.js"
---
<%
  const fileName = h.changeCase.camel(name)
%>import <%= fileName %> from './<%= fileName %>'

describe('@utils/<%= fileName %>', () => {
  it('says hello', () => {
    const result = <%= fileName %>()
    expect(result).toEqual('hello')
  })
})
