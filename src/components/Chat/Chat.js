/** @jsx jsx */

// import libs
import React, { useContext, useEffect, useState } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import { ChatProvider, ChatContext } from './ChatContext'
import MyContext from '../../context/Context'
import ChatSend from './ChatSend'

export default () => {

	const context = useContext(MyContext)

	const scrollToBottom = () => {
		var container = document.getElementById("chat-messages");
		console.log(container.scrollHeight+10000)
		container.scrollTop = container.scrollHeight+10000;
	}

	return(
		<ChatProvider>
			<ChatContext.Consumer>
				{({ state: { chats }}) => {

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
										{...chat} 
									/>
								))}
							</ul>
							<ChatSend 
								scrollToBottom={scrollToBottom}
							/>
						</div>
					)
				}}
			</ChatContext.Consumer>
		</ChatProvider>
	)
}

const Message = ({ user, me = false, msg }) => (
	<li
		className={me ? 'me' : 'you'}
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
			{user.name.charAt(0)}
		</div>
		<div className="message">
			<div className="name">{user.name}</div>
			<div 
				className="message-inner"
				dangerouslySetInnerHTML={{ __html: msg }} 		
			/>
		</div>
	</li>
)