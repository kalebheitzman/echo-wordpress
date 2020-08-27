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

				console.log(context.data)

				return(
					<div
						className="echo-lobby"
						css={css`
			
							${mq('tablet_up')} {
								overflow-y: scroll;
								display: flex;
								justify-content: center;
								min-height: calc(100vh - 100px);
							}
						`}
					>
						<div
							css={css`
								border-radius: 4px;
								position: relative;
								display: grid;
								grid-template-columns: 1fr;

								${mq('tablet_up')} {
									max-width: 720px;
									margin: 2rem 0;
								}
							`}
						>
							<Image 
								src={featuredImage.node.sourceUrl}
								srcSet={featuredImage.node.srcSet} 
							/>
							<div>
								<h1>{title}</h1>
								<div
									css={css`
										background: #f7f7f7;
										padding: 0.5rem 1rem;
										border-radius: 4px;
										margin-bottom: 0.5rem;
									`}
								>
									Start: {eventStartTime}<br />
									End: {eventEndTime}
								</div>
								<Content content={content} />
							</div>
						</div>
					</div>
				)
			}}
		</MyContext.Consumer>
	)
}