/** @jsx jsx */

// import libs
import React from 'react'

// import components
import Logo from './Logo'
import User from './User'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {

	return(
		<header
			className="echo-header"
			css={css`
				background: var(--highlight-primary-bg);
				color: var(--highlight-primary-color);
				display: grid;
				align-items: center;
				font-style: italic;
				grid-template-columns: 1fr 1fr;

				${mq('tablet_up')} {
					padding: 0 1rem;
				}
			`}
		>
			<Logo />
			<User />
		</header>
	)
}