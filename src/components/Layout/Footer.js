/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'
import SponsorImage from '../../images/tcm.png'

export default () => {

	return(
		<footer
			className="echo-footer"
			css={css`
				grid-area: footer;
				color: #bbb;
				padding: 2rem;

				${mq('tablet_up')} {
					padding: 2rem 4rem;
					border-top: 1px solid #eee; 
					display: flex;
					justify-content: center;
					align-items: center;   
				}

				p {
						margin: 0;
				}
			`}
		>
			<div
				css={css`
					display: grid;
					grid-gap: 1rem;
					text-align: center;

					${mq('tablet_up')} {
						text-align: left;
						grid-template-columns: 1fr 1fr;
						line-height: 30px;
						width: 100%;
					}
				`}
			>
				<div>
					<p>&copy; 2020 TCM International Institute.</p>
				</div>
				<div
					css={css`
						
						${mq('tablet_up')} {
							text-align: right;
						}
					`}
				>
					<div
						css={css`
							
							a {
								color: #bbb;
								display: flex;
								text-decoration: none;
								justify-content: center;

								${mq('tablet_up')} {
									justify-content: flex-end;
								}
							}

							img {
								margin-bottom: 0;
							}
						`}
					>
						<a
							href="https://www.tcmi.org"
							target="_blank"
							title="TCM International Institute"
						>
							<div
								css={css`
									display: inline-block;
									margin-right: 0.5rem;
									line-height: 30px;
								`}
							>
								Sponsored by
							</div>
							<img
								css={css`
									width: auto;
									height: 30px;
								`} 
								src={`${echoSettings.pluginUrl}/${SponsorImage}`}
								alt="TCM International Institute" 
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}