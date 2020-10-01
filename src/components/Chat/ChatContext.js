// import libs
import React, { createContext, useReducer } from 'react'

export const ChatContext = createContext()

const reducer = (state, pair) => ({ ...state, ...pair })

const initialState = {
	chats: []
}

export function ChatProvider(props) {
	const [state, update] = useReducer(reducer, initialState)

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