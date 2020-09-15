/** @jsx jsx */

// import libs
import React, { useContext, Component } from 'react'

// import social logins
import SocialLogin from 'react-social-login'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import Components
import MyContext from '../context/Context'

class SocialButton extends Component {

	render() {
		return(
			<button onClick={this.props.triggerLogin} {...this.props}>
				{this.props.children}
			</button>
		)
	}
}

export default SocialLogin(SocialButton)