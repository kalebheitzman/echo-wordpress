/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'
import Poll from './Poll'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

	const context = useContext(MyContext)

	const {
		event: {
			pollsInformation: {
				eventPolls
			}
		}
	} = context.data
	
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
				<Poll key={i} poll={poll} context={context} />
			))}
		</ul>
	)
}
