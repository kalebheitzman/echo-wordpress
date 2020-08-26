/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Wrapper from './Wrapper'
import Jitsi from './Jitsi'
import {
  HashRouter as Router,
  Switch,
	Route,
	NavLink
} from 'react-router-dom'

const Test = () => (
	<div>test</div>
)

const Main = ({ rooms }) => {

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

const Aside = ({ rooms }) => {

	return (
		<>
			<ul>
				{rooms.map(room => {
					return(
						<li 
							key={room.breakoutRoomUrl}
							css={css`
								border-bottom: 1px solid #eee;
								padding: 1rem;
							`}	
						>
							<p
								css={css`
									padding: 0;
								`}
							>
								{room.breakoutRoomTitle}
							</p>
							<div>{room.breakoutRoomDescription}</div>
							<p><NavLink to={`/rooms/${room.breakoutRoomUrl}`}>Join Room</NavLink></p>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ({ data }) => {

	const {
		event: {
			eventInformation: {
				eventBreakoutRooms
			}
		}
	} = data

	return(
		<Wrapper main={<Main rooms={eventBreakoutRooms} />} aside={<Aside rooms={eventBreakoutRooms} />} />
	)
}