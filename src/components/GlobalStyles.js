// import libs
import React from 'react'

// import css
import { Global, css } from '@emotion/core'
import mq from '../utils/media'

export default () => (
	<Global
		styles={css`
			:root {
				--highlight-primary-bg: #ff444e;
				--highlight-primary-color: #fff;
				--highlight-primary-hover: #ff4447;
				
				--text-color: #333;
				--html-background-color: #333;
				--body-background-color: #fff;
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
				}
			}

			#wp-project-echo {
				font-size: 14px;

				*, *:before, *:after {
					box-sizing: border-box;
					font-family: sans-serif;
				}

				h1, h2, h3, h4, h5, h6, p, ol, ul {
					margin: 0 0 1rem;
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

				h1 {
					font-size: 2rem;
					margin: 0 0 1rem;
				}
				h2 {
					font-size: 1.6rem;
				}
				h3 {
					font-size: 1.2rem;
				}
				h4, h5, h6 {
					font-size: 1rem;
				}
				p {
					font-size: 16px;
				}

				a {
					outline: none;
					text-decoration: none;
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