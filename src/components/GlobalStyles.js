// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../context/Context'

// import css
import 'normalize.css'
import { Global, css } from '@emotion/core'
import mq from '../utils/media'

export default () => {
	const context = useContext(MyContext)

	return (
		<Global
			styles={css`
				/* Text meant only for screen readers. */
				.screen-reader-text {
					border: 0;
					clip: rect(1px, 1px, 1px, 1px);
					clip-path: inset(50%);
					height: 1px;
					margin: -1px;
					overflow: hidden;
					padding: 0;
					position: absolute;
					width: 1px;
					word-wrap: normal !important;
				}

				html {
					background: var(--html-background-color);
				}

				body {
					background: var(--body-background-color);
					
					&.admin-bar {

						.echo-container {

							${mq('tablet_up')} {
								grid-template-rows: 10vh calc(90vh - 32px);
							}
						}

						.echo-jitsi-container {
			
							${mq('tablet_up')} {
								height: calc(90vh - 32px);
							}
						}
					}
				}

				.echo-container {
					display: grid;
					grid-template-columns: 1fr;
					animation: fadein 500ms;

					@keyframes fadein {
						from { opacity: 0; width: 0; }
						to   { opacity: 1; width: 100%; }
					}

					${mq('tablet_up')} {
						grid-template-rows: 10vh 90vh;
					}
				}

				.echo-body {
					display: grid;
					grid-template-columns: 1fr;

					${mq('tablet_up')} {
						grid-template-columns: 120px 1fr;
						overflow: hidden;
					}
				}

				.echo-main {
					display: grid;
					grid-template-columns: 1fr;

					${mq('tablet_up')} {
						grid-template-columns: 300px 1fr;	
						height: 100%;
						overflow: hidden;
						transition: all 85ms ease-out;

						&.closed {
							grid-template-columns: 0px 1fr;
						}
					}
				}

				.echo-jitsi-container {
					height: 100%; 
					width: 100%;

					${mq('tablet_up')} {
						height: 90vh;
					}
				}

			`}
		/>
	)
}