/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../context/Context'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	const context = useContext(MyContext)

	const {
		event: {
			pollsInformation: {
				eventPolls
			}
		}
	} = context.data

	console.log(eventPolls)

	return(
		<ul
			css={css`
				margin: 0;
				padding: 0;
				
				li {
					padding: 1rem;
					border-bottom: 1px solid #efefef;
					margin-bottom: 0;

					h3 {
						margin: 0;
					}
				}
			`}
		>
			<li>
				<h3>Polls</h3>
			</li>
			{eventPolls.map((poll, i) => (
				<Poll key={i} poll={poll} />
			))}
		</ul>
	)
}

const Poll = ({ poll }) => {

	return (
		<li className={poll.eventPollType}>
			<p>{poll.eventPollQuestion}</p>

			{poll.eventPollType === 'choose' && (
				<Choose />
			)}

			{poll.eventPollType === 'scale' && (
				<Scale />
			)}

			{poll.eventPollType === 'options' && (
				<Options options={poll.eventPollOptions} />
			)}

		</li>
	)
}

const Choose = () => (
	<div
		css={css`
			display: flex;
			align-items: center;

			input {
				margin-right: 0.25rem;
			}
			label {
				margin-right: 1rem;
			}
		`}
	>
		<input name="choose" value="1" type="radio" />
		<label>Yes</label>
		<input name="choose" value="0" type="radio" />
		<label>No</label>
	</div>
)

const Scale = () => (
	<div
		css={css`
			display: flex;
			align-items: center;

			input {
				margin-right: 0.25rem;
			}
			label {
				margin-right: 1rem;
			}
		`}
	>
		<input name="scale" value="1" type="radio" />
		<label>1</label>
		<input name="scale" value="2" type="radio" />
		<label>2</label>
		<input name="scale" value="3" type="radio" />
		<label>3</label>
		<input name="scale" value="4" type="radio" />
		<label>4</label>
		<input name="scale" value="5" type="radio" />
		<label>5</label>
	</div>
)

const Options = ({ options }) => (
	<div
		css={css`

			input {
				margin-right: 0.25rem;
			}
		`}
	>
		{options.map((option, i) => (
			<div key={i}>
				<input name="options" value={i} type="radio" />
				<label>{option.eventOptionQuestion}</label>
			</div>
		))}
	</div>
)