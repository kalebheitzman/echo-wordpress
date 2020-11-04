/** @jsx jsx */

// import libs
import React, { useState, useContext, useEffect } from 'react'
import { client, SUBMIT_COMMENT } from '../../utils/apollo'
import { gql } from '@apollo/client'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import SocialLogin from '../User/SocialLogin'

export default ({ setScrollActive }) => {

	const [disabled, setDisabled] = useState(true)
	const [message, setMessage] = useState("")

	const context = useContext(MyContext)

	console.log(context) 

	const {
    user
	} = context
	
	const sendMessage = (event) => {

		client.mutate({
			mutation: SUBMIT_COMMENT,
			variables: {
				id: echoSettings.eventID,
				content: message,
				email: user ? user.email : '',
				name: user ? user.name : 'Guest'
			}
		}).then(results => {
			setScrollActive(true)
			setMessage("")
			setDisabled(true)
		})

		event.preventDefault()
	}

	const handleChange = (event) => {
		setMessage(event.target.value)
	
		if (event.target.value.length > 0) {
			setDisabled(false)
		}
		if (event.target.value.length === 0) {
			setDisabled(true)
		}
	}

	if (!context.user) {
		return (
			<div
				css={css`
					border-top: 1px solid #eee;
					background: #104879;
					color: #fff;
					padding: 1rem;
				`}
			>
				<SocialLogin label="Login to chat" />
			</div>
		)
	}

	return(
		<div
			css={css`
				border-top: 1px solid #eee;
				padding: 1rem;
			`}
		>
			<form
				onSubmit={sendMessage}
				css={css`
					display: grid;
					grid-template-columns: 1fr 60px;
					box-sizing: border-box;

					input {
						border: 1px solid #eee;
						outline: none;
						border-top-left-radius: 5px;
						border-bottom-left-radius: 5px;
						box-sizing: border-box;
					}

					button {
						border: 0;
						outline: 0;
						cursor: pointer;
						padding: 0.5rem 0;
						border-top-right-radius: 5px;
						border-bottom-right-radius: 5px;
						box-sizing: border-box;
					}
				`}
			>
				<input
					type="text"
					placeholder="Message..."
					css={css`
						padding: 0.5rem 1rem;
					`}
					onChange={handleChange}
					value={message}
				/>
				<button
					disabled={disabled}
				>
					Send
				</button>
			</form>
		</div>
	)
}



// mutation MyMutation {
//   __typename
//   createComment(input: {clientMutationId: "CreateComment", authorEmail: "kalebheitzman@gmail.com", commentOn: 55, content: "test comment 3", author: "Kaleb Heitzman"}) {
//     comment {
//       content(format: RENDERED)
//       date
//     }
//   }
// }
