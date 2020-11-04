/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import Components
import MyContext from '../../context/Context'
import { Link } from 'react-router-dom'

export default () => {

	const context = useContext(MyContext)

	if ( context.data.event ) {

		const {
			event: {
				title,
				eventBranding: {
					eventLogo
				}
			}
		} = context.data

		return (
			<div
				css={css`
					display: flex;
					align-items: center;

					a {
						text-decoration: none;
						color: #fff;

						h1 {
							font-size: 2rem;
							font-style: italic;
						}
					}
				`}
			>
				<Link to="/">
					{eventLogo && (
						<img 
							css={css`
								margin: 0;
								max-height: 30px;
								object-fit: contain;
								object-position: left center;

								${mq('tablet_up')} {
									max-height: 50px;
								}
							`}
							srcSet={eventLogo.srcSet} 
							alt={title}
						/>
					)}
					{!eventLogo && (
						<h1>{title}</h1>
					)}
				</Link>
			</div>
		)
	}

	return(
		<div></div>
	)
}