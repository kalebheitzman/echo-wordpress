// import libs
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { persistCache } from 'apollo-cache-persist'

const cache  = new InMemoryCache()

persistCache({
	cache,
	storage: window.localStorage,
})

// create the client
export const client = new ApolloClient({
	uri: echoSettings.graphql,
	cache: new InMemoryCache(),
	connectToDevTools: true
})