/** @jsx jsx */

// import libs
import React from 'react'

// import components
import ClockLoader from 'react-spinners/ClockLoader'

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
		<ClockLoader 
			size={150}
			color={"#efefef"}
		/>
	</div>
)