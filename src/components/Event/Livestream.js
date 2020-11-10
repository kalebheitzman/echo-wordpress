/** @jsx jsx */

// import libs
import React, { useEffect, useState, useContext } from 'react'
import querystring from 'querystring'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'

export default ({ mute = false, mini = false }) => {

	const context = useContext(MyContext)

	const {
		event: {
			title,
			eventInformation,
			eventSettings,
			eventInformation: {
				eventLivestreamType
			}
		}
	} = context.data

	let params = {
	}

	// vimeo params
	if ( eventLivestreamType === 'vimeo' ) {
		params.playsline = 1
		params.quality = '1080p'
		params.autoplay = 1
		params.muted = mute ? 1 : 0
	}

	// youtube params

	let livestreamUrl = `${eventInformation.eventLivestreamUrl}?${querystring.stringify(params)}`

	return(
		<div
			css={css`
				

				&.mini {
					position: relative;
					overflow: hidden;
					padding-top: 56.25%;
					background: #111;

					iframe {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border: 0;
					}
				}

				&.fullsize {
					margin: 0 auto;
					height: 58vw;
					text-align: center;
					overflow: hidden;
					max-width: 178vh;
	
					${mq('tablet_side')} {
						height: calc( 100vh - 180px);
					}

					iframe {
						height: 100%;
						width: 100%;
					}
				}

			`}
			className={mini ? 'mini' : 'fullsize'}
		>
			<Seo pageTitle={eventSettings.mainStageLabel} siteTitle={title} />
			<iframe 
				src={livestreamUrl} 
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
			/>
		</div>
	)
}
