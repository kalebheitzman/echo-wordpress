/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import MyContext from '../context/Context'

const Rest = () => {

	return (
		<MyContext.Consumer>
			{(context) => {
				return(
					<Fragment>
						<h3>REST API Details</h3>
						<p><small><em>Localizing the Wordpress API url and nonce and storing in React Context to make requests.</em></small></p>
						<ul>
							<li>Rest API Url: {context.api}</li>
							<li>Rest API Nonce: {context.nonce}</li>
						</ul>
					</Fragment>
				)
			}}
		</MyContext.Consumer>
	)
}

export default Rest
