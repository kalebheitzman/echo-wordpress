/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
		faSearch,
		faDoorOpen,
		faVideo,
		faUsers,
		faUserFriends,
		faQuestion,
		faPoll
  } from '@fortawesome/free-solid-svg-icons'

const links = [
	{
		name: 'Lobby',
		path: '/',
		icon: faDoorOpen
	},
	{
		name: 'Main Stage',
		path: '/main-stage',
		icon: faVideo
	},
	{
		name: 'Rooms',
		path: '/rooms',
		icon: faUsers
	},
	// {
	// 	name: 'Attendees',
	// 	path: '/attendees',
	// 	icon: faSearch
	// },
	{
		name: 'Chat',
		path: '/chat',
		icon: faUserFriends
	},
	{
		name: 'Q&A',
		path: '/qa',
		icon: faQuestion,
		faPoll
	},
	{
		name: 'Polls',
		path: '/polls',
		icon: faPoll
	},
]

export default () => {

	return(
		<nav
			className="echo-nav"
			css={css`
				padding: 1rem;
				background: #f7f7f7;
				border-right: 1px solid #eee;				
			`}
		>
			<ul
				css={css`
					list-style: none;
					margin: 0;
					padding: 0;

					li {
						text-align: center;

						span.label {
							font-size: 10px;
							text-transform: uppercase;
							display: block;
						}

						a {
							color: #333;
						}
					}
				`}
			>
				{links.map(link => (
					<li key={link.path}>
						<Link to={link.path}>
							<FontAwesomeIcon
								icon={link.icon}
								fixedWidth
								aria-hidden="true"
								title={link.name}
								css={css`
									text-align: center;
								`}
							/>
							<span className="label">{link.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}