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
					border-bottom: 1px solid #efefef;

					h3 {
						margin: 0;
					}
				}
			`}
		>
			<li>
				<h3>Q&amp;A</h3>
			</li>
		</ul>
	)
}