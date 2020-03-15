<template>
  <Layout>
    <div>
      <h1>This is an about page</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/Layout.vue'
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'description text' }],
  },
  name: 'About',
  components: { Layout },
}
</script>
