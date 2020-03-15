---
to: "src/views/<%= h.changeCase.pascal(name) %>.vue"
---
<%
  const titleName = h.changeCase.title(name)
%><script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: '<%= titleName %>',
    meta: [{ name: 'description', content: 'The <%= titleName %> page.' }],
  },
  components: { Layout }
}
</script>

<template>
  <Layout>
    <%= titleName %>
  </Layout>
</template>
<%

if (useStyles) { %>
<style lang="postcss" scoped>
</style>
<% } %>
