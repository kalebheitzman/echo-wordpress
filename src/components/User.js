/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import axios from 'axios'
import MyContext from '../context/Context'
import Api from '../utils/api'

class User extends Component {

	state = {
		loading: true,
		error: false,
		user: null
	}

	componentDidMount() {
		const {
			api,
			nonce
		} = this.props.context

		let dataApi = new Api({ api, nonce });

		dataApi.getCurrentUser(
			response => {
				this.setState({
					user: response,
					loading: false
				})
			},
			error => {
				this.setState({
					loading: false,
					error: true
				})
			}
		)
	}

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					if (this.state.loading) {
						return <div>Loading...</div>
					}
					if (this.state.error) {
						return (
							<Fragment>
								<h3>Current User</h3>
								<Message />
								<p>No current user</p>
							</Fragment>
						)
					}

					console.log(this.state)

					return(
						<Fragment>
							<h3>Current User</h3>
							<Message />
							<div
								css={css`
									line-height: 50px;
									display: grid;
									grid-template-columns: 50px 1fr;
									grid-column-gap: 1rem;
								`}
							>
								<img
									css={css`
										height: 50px;
										width: 50px;
										display: inline-block;
										border-radius: 50px;
									`}
									src={this.state.user.avatar_urls[96]} />
								<span>
									{this.state.user.name}
								</span>
							</div>
						</Fragment>
					)
				}}
			</MyContext.Consumer>
		)
	}

}

const Message = () => (
	<p><small><em>Testing the api and nonce to check for a current user.</em></small></p>
)

export default props => (
	<MyContext.Consumer>
		{context => <User {...props} context={context} />}
	</MyContext.Consumer>
)
