/** @jsx jsx */

// import libs
import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Typography from '../utils/typography'

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
import Polls from './Polls/Polls'
import Livestream from './Livestream'
import ScheduleAside from './ScheduleAside'
import RoomsNavigation from './RoomsNavigation'
import Jitsi from './Jitsi'
import Footer from './Footer'

// inject typography styles
Typography.injectStyles()

export default () => {
	
	return (
		<MyProvider>
			<GlobalStyles />
			<Router>
				<MyContext.Consumer>
					{context => {
						if (context.loading) {
							return(
								<div
									css={css`
										width: 100vw;
										height: 100vh;
										background: var(--highlight-primary-bg);
										display: flex;
										justify-content: center;
										align-items: center;
									`}
								>
									<Loader />
								</div>
							)
						}

						return(
							<div className="echo-container">
								<Header />
								<div className="echo-body">
									<Navigation />
									<>
										<Route exact path="/">
											<Lobby />
										</Route>

										<div className="echo-main">
											<main
												css={css`
													grid-column: 2;
													grid-row: 1;
													background: #111;

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
												<Footer />
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
											{/* <Footer /> */}
										</div>
									</>
								</div>
							</div>
						)
					}}
				</MyContext.Consumer>
			</Router>
		</MyProvider>
	)
}