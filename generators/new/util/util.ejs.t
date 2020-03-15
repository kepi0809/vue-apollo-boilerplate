---
to: "src/utils/<%= h.changeCase.camel(name) %>.js"
---
<%
  const importName = h.changeCase.camel(name)
%>export default function <%= importName %>() {
  return 'hello'
}
