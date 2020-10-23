/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'
import RoomLink from './RoomLink'

export default () => {
	const context = useContext(MyContext)
	
	const {
		event: {
			title,
			roomsInformation: {
				eventRooms
			},
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	return (
		<>
			<Seo pageTitle="Rooms" siteTitle={title} />
			<ul
				css={css`
					margin: 0;
					padding: 0;
				`}
			>
				{eventRooms.map(room => {

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
									grid-template-columns: 40px 1fr 60px;
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
										width: 40px;
										height: 40px;
										border-radius: 40px;
										display: flex;
										justify-content: center;
										align-items: center;
										font-weight: bold;
										text-align: center;
									`}
								>
									{room.eventRoomTitle.charAt(0)}
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
										margin-left: 48px;
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
				})}
			</ul>
		</>
	)
}
