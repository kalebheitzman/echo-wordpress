/** @jsx jsx */

// import libs
import React, { useState, useContext } from 'react'
import _ from 'lodash'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import { ChatContext } from './ChatContext'

export default () => {

	const [message, setMessage] = useState("")
	const [disabled, setDisabled] = useState(true)

	const context = useContext(MyContext)
	const { state, setChats } = useContext(ChatContext)

	const sendMessage = (event) => {
		setChats({
			user: {
				name: _.sample(['Kaleb', 'Tony', 'David', 'Megan', 'Tom', 'Rick', 'Scott', 'Mihai', 'Fred', 'Myron', 'Sara']),
			},
			msg: message.trim(),
			me: _.sample([true, false])
		})
		//context.setLocalChat(message.trim())
		setMessage("")
		setDisabled(true)
		event.preventDefault()
	}

	const handleChange = (event) => {
		if (event.target.value.length > 0) {
			setMessage(event.target.value)
			setDisabled(false)
		}
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
					autoFocus={true}
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
