/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import MyContext from '../context/Context'

const Counter = () => {

	return (
		<MyContext.Consumer>
			{(context) => {
				return(
					<Fragment>
						<h3>Counter on Context</h3>
						<p><small><em>Using React Context to manage counter state.</em></small></p>
						<p>Current Count: {context.state.count}</p>
						<p>
							<button
								css={css`
									margin-right: 5px;
								`}
								onClick={() => context.increaseCount()}
							>
								Increase
							</button>
							<button
								disabled={context.state.count === 0 ? true : false}
								onClick={() => context.decreaseCount()}
							>
								Decrease
							</button>
						</p>
					</Fragment>
				)
			}}
		</MyContext.Consumer>
	)
}

export default Counter
