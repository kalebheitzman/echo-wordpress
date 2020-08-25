/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyProvider from '../context/Provider'
import Header from './Header'
import Navigation from './Navigation'

export default () => {

	return (
		<MyProvider>
			<Header />
			<div
				css={css`
					display: grid;
					grid-template-columns: 1fr;
					
					${mq('tablet_side')} {
						grid-template-columns: 100px 1fr;
					}
				`}
			>
				<Navigation />
			</div>
		</MyProvider>
	)
}