/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

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
				padding: 0 2rem 1rem;
				border-bottom: 1px solid #efefef;
				margin-bottom: 0;

				${mq('tablet_up')} {
          padding: 0 1rem 1rem;
        }
			`}
		>
			<div
				css={css`
					margin-left: -2rem;
					margin-right: -2rem;
					margin-bottom: 0.5rem;
					padding: 0.35rem 2rem;
					background: #f7f7f7;
					color: #777;

					${mq('tablet_up')} {
						margin-left: -1rem;
						margin-right: -1rem;  
						padding: 0.4rem 1rem;
					}
				`}
			>
				{event.scheduleItemTime}
			</div>
			<p
				css={css`
					margin-bottom: 0.25rem;
				`}
			>
				{event.scheduleItemTitle}
			</p>
			<div
				css={css`
					color: #777;
					padding-bottom: 0.5rem;
					font-style: italic;
				`} 
				dangerouslySetInnerHTML={{ __html: event.scheduleItemDescription }} 
			/>
		</li>
	)
}