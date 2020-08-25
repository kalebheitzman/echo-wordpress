/** @jsx jsx */

// import libs
import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'
import '../utils/typography'

// import components
import MyProvider from '../context/Provider'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Navigation from './Navigation'

// import switch components
import Lobby from './Lobby'
import MainStage from './MainStage'
import Rooms from './Rooms'
import Attendees from './Attendees'
import Chat from './Chat'
import QA from './QA'
import Polls from './Polls'

export default () => {

	return (
		<MyProvider>
			<GlobalStyles />
			<Router>
				<Header />
				<div
					css={css`
						display: grid;
						grid-template-columns: 1fr;
						
						${mq('tablet_side')} {
							grid-template-columns: 120px 1fr;
						}
					`}
				>
					<Navigation />
					<Switch>
						<Route path="/main-stage">
							<MainStage />
						</Route>
						<Route path="/rooms">
							<Rooms />
						</Route>
						<Route path="/attendees">
							<Attendees />
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
						<Route path="/">
							<Lobby />
						</Route>
					</Switch>
				</div>
			</Router>
		</MyProvider>
	)
}