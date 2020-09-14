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
			`}
		>
			<div
				css={css`
					margin-left: -1rem;
					margin-right: -1rem;
					margin-bottom: 0.5rem;
					padding: 0.35rem 1rem;
					background: #f7f7f7;
				`}
			>
				{event.scheduleItemTime}
			</div>
			<p
				css={css`
					margin-bottom: 0.25rem;
				`}
			>
				<strong>{event.scheduleItemTitle}</strong>
			</p>
			<div
				css={css`
					color: #555;
					margin-bottom: 0.75rem;
				`} 
				dangerouslySetInnerHTML={{ __html: event.scheduleItemDescription }} 
			/>
		</li>
	)
}