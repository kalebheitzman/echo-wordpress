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
import MyContext from '../context/Context'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Navigation from './Navigation'

// import switch components
import Loader from './Loader'
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
				<MyContext.Consumer>
					{context => {

						return(
							<div className="echo-container">
								<Header />
								<div className="echo-body">
									<Navigation />
									{context.loading && (
										<Loader />
									)}
									{!context.loading && (
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
												<Lobby data={context.data} />
											</Route>
										</Switch>
									)}
								</div>
							</div>
						)
					}}
				</MyContext.Consumer>
			</Router>
		</MyProvider>
	)
}