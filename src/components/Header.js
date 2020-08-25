/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	return(
		<header
			css={css`
				background: #ff4447;
				color: #fff;

				${mq('tablet_up')} {
					height: 10vh;
					padding: 0 1rem;
				}
			`}
		>
			Echo Header
		</header>
	)
}