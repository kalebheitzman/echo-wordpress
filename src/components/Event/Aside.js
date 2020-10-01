/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import {
  Switch,
  Route
} from 'react-router-dom'
import ScheduleAside from './ScheduleAside'
import RoomsNavigation from './RoomsNavigation'
import Chat from '../Chat/Chat'
import QA from './QA'
import Polls from '../Polls/Polls'
import LivestreamMini from './LivestreamMini'

export default () => {

	return (
		<aside
			css={css`
				grid-area: aside;

				${mq('tablet_up')} {
					position: sticky;
					top: 0;
					background: #fff;
					overflow-y: scroll;
					height: calc(100vh - 100px);
					border-right: 1px solid #eee;    
				}
			`}
		>
			<LivestreamMini />
			
			<Switch>
				<Route path="/main-stage">
					<ScheduleAside />
				</Route>
				<Route path="/schedule">
					<ScheduleAside />
				</Route>				
				<Route path="/rooms">
					<RoomsNavigation />
				</Route>
				<Route path="/chat">
					<Chat />
				</Route>
				<Route path="/qa">
					<QA />
				</Route>
				<Route path="/polls">
					<Polls />
				</Route>
			</Switch>
		</aside>
	)
}