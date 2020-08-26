/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import Jitsi from './Jitsi'
import {
  Switch,
	Route
} from 'react-router-dom'

export default () => {
	const context = useContext(MyContext)
	
	const {
		event: {
			roomsInformation: {
				eventRooms
			}
		}
	} = context.data

	const routeComponents = eventRooms.map((room, key) => (
		<Route 
			key={key} 
			exact 
			path={`/rooms/${room.eventRoomSlug}`} 
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
