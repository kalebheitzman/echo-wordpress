/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import LiveStream from './Livestream'
import Room from './Room'
import {
  Switch,
  Route
} from 'react-router-dom'
import Livestream from './Livestream'

export default () => {

		const context = useContext(MyContext)
		
		const Component = () => {
			return <Livestream />
		}

    return (
			<div
				css={css`
					grid-area: main;

					${mq('tablet_up')} {
						//height: calc(100vh - 100px);
						overflow-y: scroll;
					}
				`}
			>
				<Switch>
					<Route path="/main-stage" component={LiveStream} />
					<Route path="/rooms/:room" component={Room} />
					<Route path="/:subpage" render={props => {
						if (context.main === 'main-stage') {
							return <Livestream {...props} />
						}
						else if (context.main === 'rooms') {
							return <Room {...props} />
						} else {
							return <Livestream {...props} />
						}
					}} />
				</Switch>
			</div>
    )
}