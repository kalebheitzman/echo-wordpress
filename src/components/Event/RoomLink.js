/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../../context/Context'
import {
	NavLink
} from 'react-router-dom'

export default ({ room }) => {

	const context = useContext(Context)

	const {
		event: {
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	const cssStyle = css`
		background: ${eventColors.primaryBackground};
		color: ${eventColors.primaryTextColor};
		padding: 0.25rem 0.35rem;
		border-radius: 4px;
		text-decoration: none;

		&:visited {
			color: ${eventColors.primaryTextColor};
		}

		&[target="_blank"]:after {
			content: " " url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII=); 
		}
	`
	
	if (room.eventRoomType === 'external') {
		return(
			<a 
				href={room.eventExternalMeetingUrl}
				css={cssStyle}
				target="_blank"
			>
				Join
			</a>
		)
	}

	return (
		<NavLink 
			to={`/rooms/${room.eventRoomSlug}`}
			css={cssStyle}
			onClick={() => {
				context.setRoom({})
				context.setMain('rooms')
				context.setRoom(room)
			}}
		>
			Join
		</NavLink>
	)
}