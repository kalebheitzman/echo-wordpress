/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
		icon: faDoorOpen,
		main: false
	},
	{
		name: 'Main Session',
		path: '/main-stage',
		icon: faVideo,
		main: 'main-stage'
	},
	{
		name: 'Rooms',
		path: '/rooms',
		icon: faUsers
	},
	{
		name: 'Chat',
		path: '/chat',
		icon: faUserFriends
	},
	{
		name: 'Q&A',
		path: '/qa',
		icon: faQuestion,
	},
	{
		name: 'Polls',
		path: '/polls',
		icon: faPoll
	},
]

export default () => {

	return(
		<MyContext.Consumer>
			{context => {

				return(
					<nav
						css={css`
							grid-area: navigation;
							background: #f7f7f7;
							border-top: 1px solid #eee;
							display: grid;
							grid-template-columns: 1fr;
							position: sticky;
							bottom: 0;
							padding: 0 1rem;
			
							${mq('tablet_up')} {
								grid-template-columns: 1fr;
								grid-template-rows: 1fr 100px;                        
								border-bottom: none;
								border-right: 1px solid #eee;
								box-sizing: border-box;    
								top: 100px;
								height: calc(100vh - 100px);
								padding: 0;
							}
						`}
					>
						<ul
							css={css`
								list-style: none;
								margin: 0;
								padding: 0;
			
								display: flex;
								justify-content: center;
			
								${mq('tablet_up')} {
									display: block;
									padding: 1rem 0;
								}
			
								li {
									margin: 0;
									padding: 0;
									display: flex;
									flex-grow: 1;
									flex-basis: 0;
									font-size: 1.2rem;
			
									${mq('tablet_up')} {
										display: block;
										margin: 0 0 1rem;
									}
			
									a {
										width: 100%;
										background: none;
										border: none;
										outline: none;
										padding: 0;
										margin: 0;
										display: block;
										text-align: center;
										cursor: pointer;
										color: #888;
										transition: all 85ms ease-out;
										text-decoration: none;
										border-bottom: 3px solid transparent;
			
										${mq('tablet_up')} {
											border-bottom: none;
											border-right: 3px solid transparent;
										}	
			
										&.active,
										&:hover {
											border-bottom: 3px solid var(--highlight-primary-bg);
											color: #333;
			
											${mq('tablet_up')} {
												border-bottom: none;
												border-right: 3px solid var(--highlight-primary-bg);
											}
										}
									}
			
									span.label {
										font-size: 10px;
										text-transform: uppercase;
										display: block;
									}
								}
							`}
						>
							{links.map(link => (
								<li key={link.path}>
									<NavLink 
										exact={link.path === '/' ? true : false}
										to={link.path}
										activeClassName="active"
										css={css`
											line-height: 1.2rem;
										`}
										onClick={() => {
											if (link.main !== undefined) {
												context.setMain(link.main)
											}
											else {
												context.setMain(context.main)
											}
										}}
									>
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
									</NavLink>
								</li>
							))}
						</ul>
						<div
							css={css`
								display: flex;
								justify-content: center;
								align-items: center;

								a {
									font-size: 1.25rem;
									height: 3rem;
									width: 3rem;
									border-radius: 3rem;
									display: flex;
									justify-content: center;
									align-items: center;
									background: #eee;
									color: #ccc;
									font-weight: bold;
									text-decoration: none;
									transition: all 185ms ease-out;

									&:hover {
										background: #e9e7ea;
										color: #bbb;
									}
								}
							`}
						>
							<a
								href="https://github.com/kalebheitzman/wp-project-echo"
								target="_blank"
							>E</a>
						</div>
					</nav>
				)
			}}
		</MyContext.Consumer>
	)
}