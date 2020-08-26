/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import {
	NavLink
} from 'react-router-dom'

export default ({ rooms }) => {
	//console.log(window.location.hash.substring(2))
	return (
		<>
			<ul
				css={css`
					margin: 0;
					padding: 0;
				`}
			>
				{rooms.map(room => {

					return(
						<li 
							key={room.eventRoomSlug}
							css={css`
								border-bottom: 1px solid #eee;
								padding: 1rem;
								display grid;
								grid-template-columns: 40px 1fr 60px;
								grid-gap: 0.5rem;
							`}	
						>
							<div
								css={css`
									background: var(--highlight-primary-bg);
									color: var(--highlight-primary-color);
									width: 40px;
									height: 40px;
									border-radius: 40px;
									display: flex;
									justify-content: center;
									align-items: center;
									font-weight: bold;
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
								<strong>{room.eventRoomTitle}</strong>
							</div>
							{/* <div>{room.eventRoomDescription}</div> */}
							<div
								css={css`
									display: flex;
									align-items: center;
									justify-content: flex-end;
								`}
							>
								<NavLink 
									to={`/rooms/${room.eventRoomSlug}`}
									css={css`
										background: var(--highlight-primary-bg);
										color: var(--highlight-primary-color);
										padding: 0.25rem 0.35rem;
										border-radius: 4px;

										&:visited {
											color: var(--highlight-primary-color);
										}
									`}
								>
									Join
								</NavLink>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
