// import libs
import React, { Component } from 'react'
import MyContext from './Context'

// create the provider
class MyProvider extends Component {

	state = {
		count: 0,
	}

	render() {

		return(
			<MyContext.Provider
				value={{
					state: this.state, // state stored in context
					api: wpApiSettings.root, // api url for the WordPress rest api
					nonce: wpApiSettings.nonce, // nonce for authenticated requests

					// increase the counter
					// increaseCount: () => {
					// 	this.setState({
					// 		count: this.state.count+1
					// 	})
					// },

					// decrease the counter
					// decreaseCount: () => {
					// 	this.setState({
					// 		count: this.state.count === 0 ? 0 : this.state.count-1
					// 	})
					// }
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

// export the provider
export default MyProvider
