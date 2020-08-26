/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'

export default () => {

	return(
		<MyContext.Consumer>
			{context => {

				const {
					event: {
						scheduleInformation: {
							eventSchedule
						}
					}
				} = context.data

				console.log(eventSchedule)

				return (
					<ul
						css={css`
							margin: 0;
							padding: 0;
						`}
					>
						{eventSchedule.map((event, i) => (
							<ScheduleItem
								key={i}
								event={event}
							/>
						))}
					</ul>
				)
			}}
		</MyContext.Consumer>
	)
}

const ScheduleItem = ({ event }) => {
	return(
		<li
			css={css`
				padding: 0 1rem 1rem;
				border-bottom: 1px solid #efefef;
				margin-bottom: 0;
				
				p {
					margin: 0;
					padding: 0;
				}
			`}
		>
			<div
				css={css`
					margin-left: -1rem;
					margin-right: -1rem;
					margin-bottom: 0.5rem;
					padding: 0.25rem 1rem;
					background: #f7f7f7;
				`}
			>
				{event.scheduleItemTime}
			</div>
			<p><strong>{event.scheduleItemTitle}</strong></p>
			<div
				css={css`
					color: #555;
				`} 
				dangerouslySetInnerHTML={{ __html: event.scheduleItemDescription }} 
			/>
		</li>
	)
}