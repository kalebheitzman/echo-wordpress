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
import Chat from './Chat'
import QA from './QA'
import Polls from './Polls'
import Livestream from './Livestream'
import ScheduleAside from './ScheduleAside'
import RoomsNavigation from './RoomsNavigation'
import RoomsMain from './RoomsMain'
import Jitsi from './Jitsi'

export default () => {
	
	return (
		<MyProvider>
			<GlobalStyles />
			<Router>
				<MyContext.Consumer>
					{context => {
						console.log(`Context for main is ${context.main}`)
						return(
							<div className="echo-container">
								<Header />
								<div className="echo-body">
									<Navigation />
									{context.loading && (
										<Loader />
									)}
									{!context.loading && (
										<>
											<Route exact path="/">
												<Lobby />
											</Route>

											<div className="echo-main">
												<main
													css={css`
														grid-column: 2;
														grid-row: 1;

														${mq('tablet_up')} {
															overflow-y: scroll;
														}
													`}
												>
													{context.main 
														&& context.main === 'main-stage' 
														&& (
															<Livestream />
														)
													}
													{context.main 
														&& context.main === 'rooms' 
														&& (
															<Jitsi room={context.room} />
														)
													}
												</main>

												<aside
													css={css`
														grid-column: 1;
														grid-row: 1;
														
														${mq('tablet_up')} {
															border-right: 1px solid #eee;
															overflow-y: scroll;
														}
													`}
												>
													<Switch>
														<Route path="/main-stage">
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
											</div>
										</>
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