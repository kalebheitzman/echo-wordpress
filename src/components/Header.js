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
				background: #ff4447;
				color: #fff;
				display: flex;
				align-items: center;

				${mq('tablet_up')} {
					padding: 0 1rem;
				}
			`}
		>
			<div>
				{wpApiSettings.siteTitle} / {wpApiSettings.pageTitle}
			</div>
		</header>
	)
}