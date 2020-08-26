/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Wrapper from './Wrapper'
import RoomsNavigation from './RoomsNavigation'
import RoomsMain from './RoomsMain'

export default ({ data }) => {

	const {
		event: {
			roomsInformation: {
				eventRooms
			}
		}
	} = data

	return(
		<Wrapper 
			main={<RoomsMain 
				rooms={eventRooms} 
			/>} 
			aside={<RoomsNavigation 
				rooms={eventRooms} 
			/>} 
		/>
	)
}