/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import LiveStream from './Livestream'
import MainStage from './MainStage'
import Jitsi from './Jitsi'

export default () => {

		const context = useContext(MyContext)
		
    return (
			<div
				css={css`
					grid-area: main;

					${mq('tablet_up')} {
						height: calc(100vh - 100px);
						overflow-y: scroll;
					}
				`}
			>
				{ 'main-stage' === context.main && (
					<LiveStream />
				)}
				{ 'rooms' === context.main && (
					<Jitsi room={context.room} />
				)}
			</div>
    )
}