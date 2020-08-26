/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ main, aside }) => {


	return(
		<div className="echo-main">
			<main
				css={css`
					grid-column: 2;
					grid-row: 1;

					${mq('tablet_up')} {
						overflow-y: scroll;
					}
				`}
			>
				{main}
			</main>

			<aside
				css={css`
					grid-column: 1;
					grid-row: 1;
					
					${mq('tablet_up')} {
						border-right: 1px solid #eee;
						overflow-y: scroll;
					}
				`}
			>
					{aside}
			</aside>
		</div>
	)
}