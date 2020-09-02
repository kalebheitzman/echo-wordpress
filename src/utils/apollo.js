// import libs
import { ApolloClient, InMemoryCache } from '@apollo/client'

// create the client
export const client = new ApolloClient({
	uri: echoSettings.graphql,
	cache: new InMemoryCache()
})