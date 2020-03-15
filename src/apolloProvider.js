import Vue from 'vue'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const getHeaders = () => {
  const headers = {}

  const token = window.localStorage.getItem('apollo-token')

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return headers
}

const link = new HttpLink({
  uri: 'https://hasura.io/learn/graphql',
  fetch,
  headers: getHeaders(),
})

const client = new ApolloClient({
  link: link,

  cache: new InMemoryCache({
    addTypename: true,
  }),
})

const apolloProvider = new VueApollo({
  defaultClient: client,
})

export default apolloProvider
