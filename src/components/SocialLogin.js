/** @jsx jsx */

// import libs
import React, { useContext, Component } from 'react'

// import components
import SocialButton from './SocialButton'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import Components
import MyContext from '../context/Context'

const handleSocialLogin = (user) => {
	console.log(user)
}

const handleSocialLoginFailure = (err) => {
	console.log(err)
}

export default () => {

	return(
		<div>
			<SocialButton
				provider='facebook'
				appId='YOUR_APP_ID'
				onLoginSuccess={handleSocialLogin}
				onLoginFailure={handleSocialLoginFailure}
			>
				Login with Facebook
			</SocialButton>
			<SocialButton
				provider='google'
				appId='YOUR_APP_ID'
				onLoginSuccess={handleSocialLogin}
				onLoginFailure={handleSocialLoginFailure}
			>
				Login with Google
			</SocialButton>
		</div>
	)
}