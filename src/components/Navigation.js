/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import {
  Link
} from 'react-router-dom'

const links = [
	{
		name: 'Lobby',
		path: '/'
	},
	{
		name: 'Main Stage',
		path: '/main-stage'
	},
	{
		name: 'Rooms',
		path: '/rooms'
	},
	{
		name: 'Attendees',
		path: '/attendees'
	},
	{
		name: 'Chat',
		path: '/chat'
	},
	{
		name: 'Q&A',
		path: '/qa'
	},
	{
		name: 'Polls',
		path: '/polls'
	},
]

export default () => {

	return(
		<nav
			css={css`
				padding: 1rem;
				background: #f7f7f7;
				border-right: 1px solid #eee;

				${mq('tablet_up')} {
					height: 90vh;
				}
			`}
		>
			<ul
				css={css`
					list-style: none;
					margin: 0;
					padding: 0;
				`}
			>
				{links.map(link => (
					<li key={link.path}>
						<Link to={link.path}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}