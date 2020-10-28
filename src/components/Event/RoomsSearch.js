/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default ({ setRoomName }) => {

	const context = useContext(MyContext)

	const {
		event: {
			eventSettings
		}
	} = context.data

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
				placeholder={`Search ${eventSettings.roomsLabel}`} 
				onChange={(e) => setRoomName(e.target.value)}	
			/>
		</div>
	)
}