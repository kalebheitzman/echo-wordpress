/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ children }) => {

	return(
		<div
			css={css`
					grid-area: wrapper;
					overflow-y: scroll;
	
					${mq('tablet_up')} {
						display: grid;
						grid-template-areas: 
								"aside main"
								"aside footer";
						grid-template-columns: 300px 1fr;
						grid-template-rows: 1fr 80px;
						height: calc(100vh - 100px);
						overflow: hidden;
					}
			`}
		>
			{children}
		</div>
	)
}