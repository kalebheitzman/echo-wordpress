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

	const {
		params: {
			room
		}
	} = match

	const context = useContext(Context)

	const {
		event: {
			roomsInformation: {
				eventRooms
			},
		}
	} = context.data

	const roomData = eventRooms.filter(item => {
		return item.eventRoomSlug === room
	})[0]

	return (
		<div
			css={css`
				height: 100%;
				width: 100%;
			`}
		>
			{roomData.eventRoomType === 'jitsi' && (
				<Jitsi match={match} />
			)}
		</div>
	)
}