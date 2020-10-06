/** @jsx jsx */

// import libs
import React, { useContext, useEffect } from 'react'
import { client, GET_COMMENTS } from '../../utils/apollo'
import { useQuery } from '@apollo/client'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import ChatSend from './ChatSend'

export default () => {

	const context = useContext(MyContext)

	const {
		user
	} = context

	const scrollToBottom = () => {
		const container = document.getElementById("chat-messages");
		container.scrollTop = container.scrollHeight;
	}

	const { loading, error, data } = useQuery(GET_COMMENTS, {
		client: client,
		variables: {
			id: echoSettings.eventID
		},
		pollInterval: 1000
	})

	if (loading) return (<div>Loading</div>)

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

					li {
						padding: 1rem;
						margin-bottom: 0;
						box-sizing: border-box;

						h3 {
							margin-top: 0;
						}
					}
				`}
			>
				{chats.map((chat, i) => (
					<Message 
						key={i} 
						chat={chat}
						user={user}
					/>
				))}
			</ul>
			<ChatSend 
				scrollToBottom={scrollToBottom}
			/>
		</div>
	)
}

const Message = ({ chat, user }) => {

	console.log(user)

	return(
		<li
			className={user !== false && chat.node.author.email === user.email ? 
			"me" : "you"}
			css={css`
				display: grid;
				grid-template-columns: 40px 1fr;
				margin-bottom: 0;
				padding: 0.25rem 1rem;
				grid-gap: 0.5rem;

				&.me {
					grid-template-columns: 1fr 40px;

					.user {
						grid-row: 1;
						grid-column: 2;
						background: var(--highlight-primary-bg);
						color: var(--highlight-primary-color);
					}

					.message {
						grid-row: 1;
						grid-column: 1;
						justify-content: flex-end;
						text-align: right;
					}
				}

				.user {
					width: 40px;
					height: 40px;
					border-radius: 40px;
					background: #efefef;
					color: #aaa;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 1.5rem;
				}

				.message {
					border-radius: 4px;
					align-items: center;
					line-height: 1.2;

					.name {
						font-size: 0.8rem;
						color: #777;
						font-style: italic;
						margin-bottom: 0.35rem;
					}

					.message-inner {
						background: #f7f7f7;
						border-radius: 8px;
						padding: 1rem;
						word-wrap: break-all;
					}
				}
			`}
		>
			<div
				className="user"
			>
				{chat.author.node.name.charAt(0)}
			</div>
			<div className="message">
				<div className="name">{chat.author.node.name}</div>
				<div 
					className="message-inner"
					dangerouslySetInnerHTML={{ __html: chat.content }} 		
				/>
			</div>
		</li>
	)
}
