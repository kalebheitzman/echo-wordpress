/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	return(
		<footer
			className="echo-footer"
			css={css`
				background: #555;
				color: #aaa;
				padding: 1rem;

				${mq('tablet_up')} {
					grid-row: 2;
					grid-column: 2;
				}
			`}
		>
			<div>
				&copy; 2020 TCM International Institute
			</div>
		</footer>
	)
}