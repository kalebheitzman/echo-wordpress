// import libs
import React, { createContext, useReducer, useEffect } from 'react'
import { client, GET_COMMENTS } from '../../utils/apollo'
import { gql, useQuery } from '@apollo/client'

export const ChatContext = createContext()

const reducer = (state, pair) => ({ ...state, ...pair })

const initialState = {
	chats: []
}

export function ChatProvider(props) {

	const [state, update] = useReducer(reducer, initialState)

	// const getComments = () => client.query({
	// 	query: GET_COMMENTS,
	// 	variables: {
	// 		id: echoSettings.eventID
	// 	}
	// }).then(results => {
	// 	update({ chats: results.data.event.comments.nodes })
	// })

	// useEffect(() => {
	// 	const interval = setInterval(() => getComments(), 3000)
	// 	return () => clearInterval(interval)
	// }, [])

	return(
		<ChatContext.Provider 
			value={{ 
				state, 
				update,
				setChats: (chat) => {

					let chats = state.chats
					chats.push(chat)
					update({ chats: chats })
				} 
			}
		}>
			{props.children}
		</ChatContext.Provider>
	)
}