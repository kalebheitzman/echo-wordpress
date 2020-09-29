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
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Navigation from './Navigation'

// import switch components
import Loader from './Loader'
import Lobby from './Lobby'
import Wrapper from './Wrapper'
import Main from './Main'
import Aside from './Aside'
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
							<div 
								css={css`
									display: grid;
									grid-template-areas: 
										"header"
										"wrapper"
										"navigation";
									grid-template-rows: 9vh 82vh 9vh;
									grid-template-columns: 1fr;

									${mq('tablet_up')} {
										grid-template-areas: 
											"header header"
											"navigation wrapper";
										grid-template-rows: 100px 1fr;
										grid-template-columns: 100px 1fr;  
										min-height: 100vh;  
									}
								`}
							>
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