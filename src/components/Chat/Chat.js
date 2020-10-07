/** @jsx jsx */

// import libs
import React, { useContext, useState } from 'react'
import { client, GET_COMMENTS } from '../../utils/apollo'
import { useQuery } from '@apollo/client'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Loader from '../Layout/Loader2'
import ChatMessage from './ChatMessage'
import ChatSend from './ChatSend'

export default () => {

	const context = useContext(MyContext)

	const scrollToBottom = () => {
		const container = document.getElementById("chat-messages");
		container.scrollTop = container.scrollHeight;
	}

	const { loading, error, data } = useQuery(GET_COMMENTS, {
		client: client,
		variables: {
			id: echoSettings.eventID
		},
		pollInterval: 500
	})

	const [ chatMessages, setChatMessages ] = useState({})

	const {
		user,
		data: {
			event: {
				eventBranding: {
					eventColors
				}
			}
		}
	} = context

	if (loading) return (<Loader />)

	if (error) return (<div>Error</div>)

	const chats = data.comments.nodes

	return(
		<div
			css={css`
				display: grid;
				grid-template-rows: 1fr 80px;
				box-sizing: border-box;
			`}
		>
			<ul
				id="chat-messages"
				css={css`
					margin: 0;
					padding: 0 0 calc(80px + 1rem);
					height: ${context.main === 'rooms' ? `calc(100vh - 340px)` : `calc(100vh - 180px)`};
					overflow-y: scroll;
					box-sizing: border-box;

					img {
						margin-bottom: 0;
					}
				`}
			>
				{chats.map((chat, i) => (
					<ChatMessage key={chat.id} chat={chat} />
				))}
			</ul>
			<ChatSend 
				scrollToBottom={scrollToBottom}
			/>
		</div>
	)
}
