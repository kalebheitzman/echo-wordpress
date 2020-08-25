/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ main, aside }) => {


	return(
		<div
			css={css`
				display: grid;
				grid-template-columns: 1fr;

				${mq('tablet_up')} {
					grid-template-columns: 300px 1fr;	
				}
			`}
		>
			<main
				css={css`
					padding: 1rem;
					grid-column: 2;
					grid-row: 1;
				`}
			>
				{main}
			</main>

			<aside
				css={css`
					padding: 1rem;
					grid-column: 1;
					grid-row: 1;
					
					${mq('tablet_up')} {
						height: 90vh;
						border-right: 1px solid #eee;
					}
				`}
			>
				{aside}
			</aside>
		</div>
	)
}