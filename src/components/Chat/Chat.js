/** @jsx jsx */

// import libs
import React, { useContext, useState, useEffect } from 'react'
import { client, GET_COMMENTS } from '../../utils/apollo'
import { useQuery } from '@apollo/client'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'
import Loader from '../Layout/Loader2'
import ChatMessage from './ChatMessage'
import ChatSend from './ChatSend'

export default () => {

	const context = useContext(MyContext)

	const scrollToBottom = () => {
		const container = document.getElementById("chat-messages");
		if (container) {
			container.scrollTop = container.scrollHeight
		}
	}

	const [ scrollActive, setScrollActive ] = useState(true)

	useEffect(() => {
		const container = document.getElementById("chat-messages");
		if (container) {
			container.onwheel = (e) => {
				const top = container.scrollTop + 600
				const height = container.scrollHeight
				if (top >= height) {
					setScrollActive(true)
				}
				else {
					setScrollActive(false)
				}
			}
		}
	})

	useEffect(() => {
		const interval = setInterval(() => {
			if (scrollActive) {
				scrollToBottom()
			}
		}, 100)
		return () => clearInterval(interval)
	})

	const { loading, error, data } = useQuery(GET_COMMENTS, {
		client: client,
		variables: {
			id: echoSettings.eventID
		},
		pollInterval: 500,
		onCompleted: () => {
			scrollToBottom()
		},
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

	const {
		event: {
			title,
			eventSettings
		}
	} = context.data

	if (loading) return (
		<>
			<Seo pageTitle={eventSettings.chatLabel} siteTitle={title} />
			<Loader />
		</>	
	)

	if (error) return (
		<>
			<Seo pageTitle={eventSettings.chatLabel} siteTitle={title} />
			<div>Please try again later. An error has occurred.</div>
		</>
	)

	let chats = [...data.comments.nodes].reverse()

	return(
		<div
			css={css`
				display: grid;
				grid-template-rows: 1fr 80px;
				box-sizing: border-box;
			`}
		>
			<Seo pageTitle={eventSettings.chatLabel} siteTitle={title} />
			<ul
				id="chat-messages"
				css={css`
					margin: 0;
					padding: 0;
					height: ${context.main === 'rooms' ? `calc(100vh - 340px)` : `calc(100vh - 180px)`};
					overflow-y: scroll;

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
				setScrollActive={setScrollActive}
			/>
		</div>
	)
}
