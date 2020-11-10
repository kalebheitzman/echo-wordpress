/** @jsx jsx */

// import libs
import React, { useContext } from 'react'
import { detect } from 'detect-browser'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faSafari,
	faFirefoxBrowser,
	faEdge,
	faChrome
} from '@fortawesome/free-brands-svg-icons'

export default () => {

	// browser support
	const browser = detect()
	let supported = false

	const browserList = [
		{
			name: 'chrome',
			niceName: 'Chrome',
			version: 78,
			link: "https://www.google.com/chrome/",
			icon: faChrome
		},
		{
			name: 'safari',
			niceName: 'Safari',
			version: 13,
			link: "https://www.apple.com/safari/",
			icon: faSafari
		},
		{
			name: 'edge-chromium',
			niceName: 'Edge',
			version: 84,
			link: "https://www.microsoft.com/en-us/edge",
			icon: faEdge
		},
		{
			name: 'firefox',
			niceName: 'Firefox',
			version: 78,
			link: "https://www.mozilla.org/en-US/firefox/new/",
			icon: faFirefoxBrowser
		},
		{
			name: 'ios',
			niceName: 'iOS',
			version: 13,
		},
		
	]
	
	browserList.forEach(supportedBrowser => {
		if (browser.name === supportedBrowser.name && parseInt(browser.version) >= supportedBrowser.version) {
			supported = true
		}
	})

	if (!supported) {
		return (
			<div
				css={css`
					position: absolute;
					width: 100vw;
					height: 100vh;
					z-index: 10000;
					background: rgba(255,255,255,0.8);
					display: flex;
					justify-content: center;
					align-items: center;
	
					${mq('tablet_up')} {
	
					}
				`}
			>
				<div
					css={css`
						background: #fff;
						padding: 2rem;
						border-radius: 4px;
						border: 1px solid #eee;
						margin: 2rem;
	
						${mq('tablet_up')} {
							width: 500px;
						}
					`}
				>
					<h3>Browser Warning:</h3>
					<p>Your browser is not supported on this website. <em>You are currently on {browser.os} using {browser.name} {browser.version}.</em>. Please use one of the following browsers and minimum versions:</p>
					<ul
						css={css`
							list-style: none;
							margin: 0;
							padding: 0;
							display: grid;
							grid-template-columns: 1fr 1fr;
							grid-gap: 1rem;

							${mq('tablet_up')} {
								grid-template-columns: 1fr 1fr 1fr 1fr;
							}
						`}
					>
						{browserList.map(br => {

							if (br.link) {
								return(
									<li 
										key={br.name}
										css={css`
											text-align: center;
	
											p {
												margin: 0;
											}
										`}	
									>
										<a
											css={css`
												background: #f7f7f7;
												border-radius: 4px;
												padding: 1rem 0;
												display: block;
												text-decoration: none;
												color: #222;
												transition: all 85ms ease-out;
	
												&:hover {
													background: #efefef;
	
													.icon {
														color: #aaa;
													}
												}
	
												.icon {
													text-align: center;
													margin-bottom: 1rem;
													font-size: 2rem;
													color: #ddd;
												}
	
												.download {
													color: #1874c2;
												}
											`}
											href={br.link} 
											target="_blank"
										>
											<FontAwesomeIcon
												icon={br.icon}
												fixedWidth
												aria-hidden="true"
												title={br.name}
												className="icon"
											/>
											<p>&nbsp;{br.niceName} {br.version}</p>
											<p className="download">Download</p>
										</a>
									</li>
								)
							}

						})}
					</ul>
				</div>
			</div>
		)
	}

	return (<></>)
}