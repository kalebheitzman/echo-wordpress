/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../../context/Context'
import Gravatar from 'react-gravatar'

export default ({ chat }) => {

	const context = useContext(Context)

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

	return(
		<li
			className={user !== false && chat.author.node.email === user.email ? 
			"me" : "you"}
			css={css`
				display: grid;
				grid-template-columns: 40px 1fr;
				margin-bottom: 0;
				padding: 0.5rem 1rem;
				grid-gap: 0.5rem;

				&.me {
					grid-template-columns: 1fr 40px;
					
					.user {
						grid-row: 1;
						grid-column: 2;
						background: ${eventColors.primaryBackground};
						color: ${eventColors.primaryTextColor};
					}

					.message {
						grid-row: 1;
						grid-column: 1;
						justify-content: flex-end;
						text-align: right;

						.message-inner {
							background: #eee;
						}
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
			{chat.author.node.email && (
				<Gravatar
					className="user"
					email={chat.author.node.email}
				/>
			)}
			{!chat.author.node.email && (
				<div
					className="user"
				>
					{chat.author.node.name.charAt(0)}
				</div>
			)}
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