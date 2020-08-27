/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	return(
		<ul
			css={css`
				margin: 0;
				padding: 0;

				li {
					padding: 1rem;
					margin-bottom: 0;

					h3 {
						margin-top: 0;
					}
				}
			`}
		>
			<li
				css={css`
					border-bottom: 1px solid #efefef;
				`}
			>
				<h3>Chat</h3>
			</li>
			<Message
				user={{
					name: "Kaleb"
				}}
				msg="Good Morning Everyone!"
				me={true}
			/>
			<Message
				user={{
					name: "David"
				}}
				msg="Good Morning Kaleb."
			/>
			<Message
				user={{
					name: "John"
				}}
				msg="Top of the morning to ya."
			/>
			<Message
				user={{
					name: "Kaleb"
				}}
				msg="Good Morning John"
				me={true}
			/>
			<Message
				user={{
					name: "Moderator"
				}}
				msg="The Main Stage is ready. See you all there!"
			/>
		</ul>
	)
}

const Message = ({ user, me = false, msg }) => (
	<li
		className={me ? 'me' : 'you'}
		css={css`
			display: grid;
			grid-template-columns: 40px 1fr;
			margin-bottom: 0;
			padding: 0.5rem 1rem;
			grid-gap: 0.5rem;
			border-bottom: 1px solid #efefef;

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
			}

			.message {
				display: flex;
				align-items: center;
			}
		`}
	>
		<div
			className="user"
		>
			{user.name.charAt(0)}
		</div>
		<div 
			className="message"
			dangerouslySetInnerHTML={{ __html: msg }} 		
		/>
	</li>
)