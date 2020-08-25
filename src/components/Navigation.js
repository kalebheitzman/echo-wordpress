/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	return(
		<nav
			css={css`
				padding: 1rem;
				background: #f7f7f7;
				border-right: 1px solid #eee;

				${mq('tablet_up')} {
					height: 90vh;
				}
			`}
		>
			Echo Navigation
		</nav>
	)
}