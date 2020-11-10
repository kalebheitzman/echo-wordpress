// import libs
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
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

export const GET_NOTIFICATIONS = gql`
query GET_NOTIICATIONS($id: ID!) {
  event(idType: DATABASE_ID, id: $id) {
    eventNotifications {
      eventNotifications {
        eventNotification
        eventNotificationEnabled
      }
    }
  }
}
`

export const GET_COMMENTS = gql`
query GET_COMMENTS($id: ID!) {
	comments(
		where: {
			contentId: $id, 
			order: DESC, 
			orderby: COMMENT_DATE
		}, 
		first: 100
	) {
    nodes {
      id
      content(format: RENDERED)
      author {
        node {
          email
          name
        }
      }
      date
    }
  }
}
`

export const SUBMIT_COMMENT = gql`
mutation SUBMIT_COMMENT(
	$id: Int, 
	$content: String!, 
	$email: String!, 
	$name: String!
) {
  createComment(
		input: {
			clientMutationId: "CreateComment", 
			authorEmail: $email, 
			commentOn: $id, 
			content: $content, 
			author: $name,
		}
	) {
    comment {
      id
			date
			content(format: RENDERED)
			author {
				node {
					name
					email
				}
			}
    }
  }
}
`