/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import Image from './Image'
import Content from './Content'

export default () => {

	return (
		<MyContext.Consumer>
			{context => {

				const {
					event: {
						title,
						content,
						featuredImage,
						eventInformation: {
							eventStartTime,
							eventEndTime
						}
					}
				} = context.data

				return(
					<div
						className="echo-lobby"
						css={css`
							display: grid;

							${mq('tablet_up')} {
								grid-template-columns: 1fr 1fr;
								min-height: calc(100vh - 77px);
							}
						`}
					>
						<Image 
							src={featuredImage.node.sourceUrl}
							srcSet={featuredImage.node.srcSet} 
							height="100%"
							css={css`
								grid-row: 1;
								grid-column: 2;
							`}
						/>
						<div
							css={css`
								grid-row: 1;
								grid-column: 1;
								padding: 2rem;

								${mq('tablet_up')} {
									padding: 2rem 4rem;
								}
							`}
						>
							<h1>{title}</h1>
							<div
								css={css`
									background: #f7f7f7;
									padding: 1rem 1.5rem;
									border-radius: 4px;
									margin-bottom: 1rem;
									line-height: 1.5;
								`}
							>
								Start: {eventStartTime}<br />
								End: {eventEndTime}
							</div>
							<Content content={content} />
						</div>
					</div>
				)
			}}
		</MyContext.Consumer>
	)
}