/** @jsx jsx */

// import libs
import React, { useEffect, useState, useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import YouTube from 'react-youtube'
import Loader from './Loader'
import FlexWrapper from './FlexWrapper'

export default () => {

	const {
		youtubeApiKey,
		youtubeChannelId
	} = echoSettings

	const [video, setVideo] = useState({})
	const [loading, setLoading] = useState(true)
	const [ error, setError ] = useState(false)
	const [ live, setLive ] = useState(false)

	useEffect(() => {
		fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeChannelId}&eventType=live&type=video&key=${youtubeApiKey}`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
		)
			.then(async res => {
				const response = await res.json()
				if (response.items && response.items.length > 0) {

					setVideo(response.items[0].id.videoId)
					setLive(true)
					setLoading(false)
				}
				else {
					setLoading(false)
					setLive(false)
				}
			})
			.catch(error => {
				console.log(error)
			})
	})

	if (loading) {
		return(
			<FlexWrapper>
				<Loader />
			</FlexWrapper>
		)
	}

	if (!loading && !live) {
		return(
			<FlexWrapper>
				<NotLive />
			</FlexWrapper>
		)
	}

	if (!loading && live && video) {
		return(
			<div
				css={css`
					position: relative;
					overflow: hidden;
					padding-top: 56.25%;
				`}
			>
				<YouTube 
					videoId={video}
					opts={{
						playerVars: {
							autoplay: 1
						}
					}}
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

	return <></>
}

const NotLive = () => {

	const context = useContext(MyContext)

	const {
		event: {
			title,
			featuredImage,
			eventInformation: {
				eventStartTime,
				eventEndTime
			}
		}
	} = context.data

	return(
		<div
			css={css`
				background: #f7f7f7;
				border-radius: 4px;

				${mq('tablet_up')} {
					width: 720px;
				}
			`}
		>
			<div
				css={css`
					position: relative;
				`}
			>
				<img
					src={featuredImage.node.sourceUrl}
					srcSet={featuredImage.node.srcSet} 
					css={css`
						border-top-left-radius: 4px;
						border-top-right-radius: 4px;
						width: 100%;
						height: 42vh;
						object-fit: cover;
						margin-bottom: 1.5rem;
					`}
				/>
				<div 
					css={css`
						position: absolute;
						bottom: 2.5rem;
						right: 0.5rem;
						background: var(--highlight-primary-bg);
						color: var(--highlight-primary-color);
						padding: 3px 8px;
						border-radius: 4px;
						text-transform: uppercase;
						font-size: 11px;
					`}
				>
					Not Live
				</div>
			</div>
			<div
				css={css`
					padding: 0 1rem;
				`}
			>
				<h3
					css={css`
						margin-top: 0;
					`}
				>
					{title}
				</h3>
				<p>Event starts {eventStartTime}.</p>
			</div>
		</div>
	)
}