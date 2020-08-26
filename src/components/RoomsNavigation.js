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
							`}	
						>
							<p
								css={css`
									padding: 0;
									margin: 0;
								`}
							>
								<strong>{room.eventRoomTitle}</strong>
							</p>
							<div>{room.eventRoomDescription}</div>
							<p
								css={css`
									margin-top: 0.5rem;
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
									Join Room
								</NavLink>
							</p>
						</li>
					)
				})}
			</ul>
		</>
	)
}
