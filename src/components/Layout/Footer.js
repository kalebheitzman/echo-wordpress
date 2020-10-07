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
					padding: 2rem;
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
					line-height: 40px;

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
						grid-template-columns: 1fr 40px;
						grid-gap: 1rem;

						${mq('tablet_up')} {
							text-align: right;
						}
					`}
				>
					<p>Sponsored by TCMII</p>
					<a
						href="https://www.tcmi.org"
						target="_blank"
						title="TCM International Institute"
					>
						<img
							css={css`
								width: 40px;
								height: 40px;
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