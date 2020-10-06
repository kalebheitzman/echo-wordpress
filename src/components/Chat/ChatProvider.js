// import libs
import React from 'react'

// import components
import { ChatProvider } from './ChatContext'
import Chat from './Chat'

export default () => {

	return(
		<ChatProvider>
			<Chat />
		</ChatProvider>
	)
}