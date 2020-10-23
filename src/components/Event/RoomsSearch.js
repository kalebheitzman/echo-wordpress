/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ setRoomName }) => {

	return(
		<div
			css={css`
				padding: 1rem;
				border-bottom: 1px solid #eee;

				input {
					width: 100%;
					box-sizing: border-box;
					border: 0;
					padding: 0.5rem 1rem;
					border-radius: 4px;
					background: #eee;
					outline: 0;
				}

				${mq('tablet_up')} {

				}
			`}
		>
			<input 
				type="text" 
				placeholder="Search for a room" 
				onChange={(e) => setRoomName(e.target.value)}	
			/>
		</div>
	)
}