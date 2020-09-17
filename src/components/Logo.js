/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import Components
import MyContext from '../context/Context'
import { Link } from 'react-router-dom'

export default () => {

	const context = useContext(MyContext)

	if ( context.data.event ) {

		const {
			event: {
				eventInformation: {
					eventLogo
				}
			}
		} = context.data

		return (
			<div
				css={css`
					height: 50px;
					width: 220px;
					margin-right: 1rem;

					img {
						width: 220px;
						height: 50px;
						object-fit: contain;
					}
				`}
			>
				<Link to="/">
					<img srcSet={eventLogo.srcSet} />
				</Link>
			</div>
		)
	}

	return(
		<div></div>
	)
}