/** @jsx jsx */

// import libs
import React from 'react'

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

				${mq('tablet_up')} {
					padding: 0 1rem;
				}
			`}
		>
			<div>
				{echoSettings.siteTitle} / {echoSettings.pageTitle}
			</div>
		</header>
	)
}