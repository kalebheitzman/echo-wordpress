/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Jitsi from './Jitsi'
import {
  Switch,
	Route
} from 'react-router-dom'

export default ({ rooms }) => {

	const routeComponents = rooms.map((room, key) => (
		<Route 
			key={key} 
			exact 
			path={`/rooms/${room.breakoutRoomUrl}`} 
			render={() => <Jitsi room={room} />}
		/>)
	)

	return (
		<>
			<Switch>
				{routeComponents}
			</Switch>
		</>
	)
}
