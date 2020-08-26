/** @jsx jsx */

// import libs
import React, { useEffect, useState } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import YouTube from 'react-youtube'
import Loader from './Loader'
import FlexWrapper from './FlexWrapper'

export default ({ data }) => {

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

	return(
		<div
			css={css`
				background: #efefef;
				border-radius: 4px;
				padding: 1rem;

				${mq('tablet_up')} {
					width: 500px;
				}
			`}
		>
			<h3>Not Currently Live.</h3>
			<p>This event is not currently live.</p>
		</div>
	)
}