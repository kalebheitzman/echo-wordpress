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
				`}
			>
				<Link to="/">
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
					/>
				</Link>
			</div>
		)
	}

	return(
		<div></div>
	)
}