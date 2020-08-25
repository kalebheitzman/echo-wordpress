// import libs
import React from 'react'

// import css
import { Global, css } from '@emotion/core'

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

					#wp-project-echo {

						*, *:before, *:after {
							box-sizing: inherit;
							font-family: sans-serif;
							font-size: 16px;
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

					html {
						background: #333;
					}

					body {
						background: #fff;
					}

        `}
    />
)