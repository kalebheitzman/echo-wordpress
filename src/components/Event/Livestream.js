/** @jsx jsx */

// import libs
import React, { useEffect, useState, useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default () => {

	const context = useContext(MyContext)

	const {
		event: {
			eventInformation
		}
	} = context.data

	return(
		<div
			css={css`
				position: relative;
				overflow: hidden;
				padding-top: 56.25%;
				background: #111;
			`}
		>
			<iframe
				src={eventInformation.eventLivestreamUrl}
				allowFullScreen
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 0;
				`}
			/>
		</div>
	)
}
