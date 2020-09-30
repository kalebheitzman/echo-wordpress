/** @jsx jsx */
 
// import libs
import React from 'react'
import {
  HashRouter as Router,
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
import GlobalStyles from './Layout/GlobalStyles'
import Header from './Layout/Header'
import Navigation from './Layout/Navigation'
import Loader from './Layout/Loader'
import Lobby from './Event/Lobby'
import Wrapper from './Event/Wrapper'
import Main from './Event/Main'
import Aside from './Event/Aside' 
import Footer from './Layout/Footer'
import ConfirmModal from './Event/ConfirmModal'

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
							<div 
								css={css`
									display: grid;
									grid-template-areas: 
										"header"
										"wrapper"
										"navigation";
									grid-template-rows: 9vh 82vh 9vh;
									grid-template-columns: 1fr;
									animation: fadein 500ms;
									background: var(--body-background-color);

									${mq('tablet_up')} {
										grid-template-areas: 
											"header header"
											"navigation wrapper";
										grid-template-rows: 100px 1fr;
										grid-template-columns: 100px 1fr;  
										min-height: 100vh;  
									}

									@keyframes fadein {
										from { opacity: 0; width: 0; }
										to   { opacity: 1; width: 100%; }
									}

								`}
							>
								<ConfirmModal />
								<Header />

								<Navigation />

								<Route exact path="/">
									<Lobby />
								</Route>

								<Route path="/:subpath">
									<Wrapper>
										<Main />
										<Aside />
										<Footer />
									</Wrapper>
								</Route>


							</div>
						)
					}}
				</MyContext.Consumer>
			</Router>
		</MyProvider>
	)
}