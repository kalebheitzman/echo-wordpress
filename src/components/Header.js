/** @jsx jsx */

// import libs
import React from 'react'

// import components
import Logo from './Logo'
import SocialLogin from './SocialLogin'

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
				display: flex;
				align-items: center;
				font-style: italic;

				${mq('tablet_up')} {
					padding: 0 1rem;
				}
			`}
		>
			<Logo />
			<SocialLogin />
		</header>
	)
}