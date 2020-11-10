/** @jsx jsx */

// import libs
import React, { useContext, useState } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'
import RoomSearch from './RoomsSearch'
import RoomLink from './RoomLink'
import RoomsSearch from './RoomsSearch'

export default () => {
	const context = useContext(MyContext)
	
	const {
		event: {
			title,
			eventSettings,
			roomsInformation: {
				eventRooms
			},
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	const [ activeRooms, setActiveRooms ] = useState("")

	const setRoomName = (search) => {
		setActiveRooms(search)
	}

	const filterRooms = (room) => {
		if (
			room.eventRoomTitle.includes(activeRooms)
			|| room.eventRoomDescription.includes(activeRooms)
			|| room.eventRoomSlug.includes(activeRooms)
		) {
			return true;
		}
		return false;
	}
	
	return (
		<>
			<Seo pageTitle={eventSettings.roomsLabel} siteTitle={title} />
			<RoomsSearch setRoomName={setRoomName} />
			<ul
				css={css`
					margin: 0;
					padding: 0;
				`}
			>
				{eventRooms.map(room => {

					if (filterRooms(room)) {
						return(
							<li 
								key={room.eventRoomSlug}
								css={css`
									border-bottom: 1px solid #eee;
									margin-bottom: 0;
								`}	
							>
								<div 
									css={css`
										display grid;
										grid-template-columns: 50px 1fr 60px;
										grid-gap: 0.5rem;
										margin-bottom: 0;
										// border-bottom: 1px solid #eee;
										padding: 1rem 2rem;

										${mq('tablet_up')} {
											padding: 1rem 1rem 0;
										}
									`}	
								>
									<div
										css={css`
											background: ${eventColors.primaryBackground};
											color: ${eventColors.primaryTextColor};
											width: 50px;
											height: 50px;
											border-radius: 50px;
											display: flex;
											justify-content: center;
											align-items: center;
											font-weight: bold;
											text-align: center;

											img {
												border-radius: 50px;
											}
										`}
									>
										<RoomImage room={room} />
									</div>
									<div
										css={css`
											padding: 0;
											margin: 0;
											display: flex;
											align-items: center;
										`}
									>
										{room.eventRoomTitle}
									</div>
									<div
										css={css`
											display: flex;
											align-items: center;
											justify-content: flex-end;
										`}
									>
										<RoomLink room={room} />
									</div>
								</div>
								<div
									css={css`
											padding: 0 1rem 1.5rem;
											margin-left: 58px;
											font-style: italic;
											color: #777;

											p {
												margin: 0;
												padding: 0;
												font-size: 0.85rem;
											}
									`}
								>
										<p>{room.eventRoomDescription}</p>
								</div>
							</li>
						)
					}
				})}
			</ul>
		</>
	)
}

const RoomImage = ({room}) => {

	if(room.eventRoomImage) {
		return(
			<img src={room.eventRoomImage.sourceUrl} />
		)
	}

	return(
		<>{room.eventRoomTitle.charAt(0)}</>
	)
}