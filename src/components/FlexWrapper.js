/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ children, justifyContent = "center", alignItems = "center" }) => {

	return(
		<div
			css={css`
				display: flex;
				justify-content: ${justifyContent};
				align-items: ${alignItems};
				width: 100%;
				background: #fff;
				// height: 100%;
			`}
		>
			{children}
		</div>
	)
}