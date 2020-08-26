/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Image from './Image'
import Content from './Content'

export default ({ data }) => {

	const {
		event: {
			title,
			content,
			featuredImage
		}
	} = data

	console.log(data)

	return (
		<div
			css={css`

				${mq('tablet_up')} {
					overflow-y: scroll;
					display: flex;
					justify-content: center;
				}
			`}
		>
			<div
				css={css`
					border-radius: 4px;
					position: relative;
					
					${mq('tablet_up')} {
						max-width: 960px;
						height: 100%;
						margin: 2rem 0;
					}
				`}
			>
				<Image 
					src={featuredImage.node.sourceUrl}
					srcSet={featuredImage.node.srcSet} 
				/>
				<h1>{title}</h1>
				<Content content={content} />
			</div>
		</div>
	)
}