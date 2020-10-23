/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Seo from '../Layout/Seo'
import Image from './Image'
import Content from './Content'
import Footer from '../Layout/Footer'

export default () => {

	return (
		<MyContext.Consumer>
			{context => {

				const {
					event: {
						title,
						content,
						eventInformation: {
							eventStartTime,
							eventEndTime,
						},
						eventBranding: {
							eventLobbyImage
						}
					}
				} = context.data

				return(
					<div
						css={css`
							grid-area: wrapper;
					
							display: grid;
							grid-template-areas: 
								"lobby-image"
								"lobby-content";
			
							height: 82h;
							overflow-y: scroll;
			
							${mq('tablet_side')} {
								grid-template-areas: 
									"lobby-content lobby-image";
								grid-template-columns: 1fr 1fr;
								height: calc(100vh - 100px);
								overflow: hidden;  
							}
						`}
					>
						<Seo pageTitle="Lobby" siteTitle={title} />
						<div
							css={css`
								grid-area: lobby-image;
								height: 35vh;
								
								${mq('tablet_side')} {
									width: 100%;
									height: 100%;
									position: sticky;
									top: 0;  
								}
							`}
						>
							<Image 
								src={eventLobbyImage.sourceUrl}
								srcSet={eventLobbyImage.srcSet} 
								height="100%"
							/>
						</div>

						<div
							css={css`
								grid-area: lobby-content;
								box-sizing: border-box;
			
								${mq('tablet_side')} {
									overflow-y: scroll;
									height: 100%;  
								}
							`}
						>
							<div
								css={css`
									padding: 2rem;
									border-bottom: 1px solid #efefef;
			
									${mq('tablet_up')} {
										padding: 2rem 4rem;              
									}
			
									p {
										margin: 0;
									}
								`}
							>
								<div
									css={css`
										display: grid; 
										grid-template-columns: 60px 1fr;
										grid-gap: 0.5rem;
										line-height: 2rem;
										
										.label {
											background: #efefef;
											border-radius: 4px;
											padding: 0 0.5rem;
											text-align: center;
										}
									`}
								>
									<div className="label">
										Starts
									</div>
									<div>
										{eventStartTime}
									</div>
									<div className="label">
										Ends
									</div>
									<div>
										{eventEndTime}
									</div>
								</div>
							</div>
							<div
								css={css`
									padding: 2rem;

									${mq('tablet_up')} {
										padding: 2rem 4rem;              
									}
								`}
							>
								<h1>{title}</h1>
								<Content content={content} />
							</div>
							<Footer />
						</div>
					</div>

				)
			}}
		</MyContext.Consumer>
	)
}