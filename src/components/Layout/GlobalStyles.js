// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'

// import css
import 'normalize.css'
import { Global, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {
	const context = useContext(MyContext)

	return (
		<Global
			styles={css`
				/* Text meant only for screen readers. */
				.screen-reader-text {
					border: 0;
					clip: rect(1px, 1px, 1px, 1px);
					clip-path: inset(50%);
					height: 1px;
					margin: -1px;
					overflow: hidden;
					padding: 0;
					position: absolute;
					width: 1px;
					word-wrap: normal !important;
				}

				html {
					background: var(--html-background-color);
				}

				body {
					background: var(--highlight-primary-bg);
				}

			`}
		/>
	)
}