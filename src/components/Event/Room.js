/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../../context/Context'
import Jitsi from './Jitsi'

export default ({ match }) => {

	const context = useContext(Context)

	const {
		room
	} = context

	return (
		<div
			css={css`
				height: 100%;
				width: 100%;
			`}
		>
			{room.eventRoomType === 'jitsi' && (
				<Jitsi match={match} />
			)}
		</div>
	)
}