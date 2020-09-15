/** @jsx jsx */

// import libs
import React from 'react'

// import components
import RiseLoader from 'react-spinners/RiseLoader'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => (
	<div
		css={css`
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
		`}
	>
		<RiseLoader 
			size={18}
			color={"rgba(255,255,255,0.3)"}
		/>
	</div>
)