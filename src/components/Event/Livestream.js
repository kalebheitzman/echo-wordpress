/** @jsx jsx */

// import libs
import React, { useEffect, useState, useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'

export default ({ mute = false }) => {

	const context = useContext(MyContext)

	const {
		event: {
			title,
			eventInformation,
			eventSettings
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
			<Seo pageTitle={eventSettings.mainStageLabel} siteTitle={title} />
			<iframe 
				src={`${eventInformation.eventLivestreamUrl}?autoplay=1`} 
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
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
