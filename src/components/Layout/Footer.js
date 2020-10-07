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
				background: #fff;
				padding: 2rem;
				position: relative;
				z-index: 105;

				${mq('tablet_up')} {
					padding: 2rem 4rem;
					border-top: 1px solid #eee;    
				}

				p {
						margin: 0;
				}
			`}
		>
			<div
				css={css`
					display: grid;
					line-height: 24px;

					${mq('tablet_up')} {
						grid-template-columns: 1fr 1fr;
					}
				`}
			>
				<div>
					<p>&copy; 2020 TCM International Institute</p>
				</div>
				<div
					css={css`
						display: grid;
						grid-template-columns: 1fr 80px;
						grid-gap: 0.5rem;

						${mq('tablet_up')} {
							text-align: right;
						}
					`}
				>
					<p>Sponsored by</p>
					<a
						href="https://www.tcmi.org"
						target="_blank"
						title="TCM International Institute"
					>
						<img
							css={css`
								width: 80px;
								height: auto;
							`} 
							src={`${echoSettings.pluginUrl}/${SponsorImage}`}
							alt="TCM International Institute" 
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}