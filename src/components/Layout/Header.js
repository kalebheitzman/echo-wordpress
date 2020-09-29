/** @jsx jsx */

// import libs
import React from 'react'

// import components
import Logo from './Logo'
import User from '../User/User'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

	return(
		<header
			className="echo-header"
			css={css`
				background: var(--highlight-primary-bg);
				color: var(--highlight-primary-color);

				grid-area: header;
				position: sticky;
				top: 0;
				z-index: 1;
				padding: 0 2rem;

				display: grid;
				grid-template-columns: 1fr 1fr;
				align-items: center;

				h1 {
					color: var(--highlight-primary-color);
				}
			`}
		>
			<Logo />
			<User />
		</header>
	)
}