// import libs
import React from 'react'

// import css
import { Global, css } from '@emotion/core'
import mq from '../utils/media'

export default () => (
	<Global
		styles={css`
			:root {
				--width-desktop: 1280px;
				--width-tablet-side: 920px;
				--width-tablet-up: 720px;

				--highlight-primary: #ff444e;
				--highlight-primary-hover: #ff4447;
				
				--text-color: #333;
			}

			html {
				background: #333;
			}

			body {
				background: #fff;

				&.admin-bar {

					.echo-container {

						${mq('tablet_up')} {
							grid-template-rows: 10vh calc(90vh - 32px);
						}
					}
				}
			}

			#wp-project-echo {

				*, *:before, *:after {
					box-sizing: border-box;
					font-family: sans-serif;
				}

				h1, h2, h3, h4, h5, h6, p, ol, ul {
					margin: 0;
					padding: 0;
					font-weight: normal;

					&:before {
						background: none;
						content: ''
						height: auto;
						margin: 0;
						width: auto;
					}
				}

				ol, ul {
					list-style: none;
				}

				img {
					max-width: 100%;
					height: auto;
				}
			}

			.echo-container {
				display: grid;
				grid-template-columns: 1fr;

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
				}
			}

		`}
	/>
)