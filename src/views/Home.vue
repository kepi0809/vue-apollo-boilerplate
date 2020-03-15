<template>
  <Layout>
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@layouts/Layout.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'description text' }],
  },
  name: 'Home',
  components: { HelloWorld, Layout },
}
</script>
