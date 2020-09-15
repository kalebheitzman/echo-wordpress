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

export default () => {

	const context = useContext(MyContext)

	const {
		projectEcho: {
			echoSocialLogin
		}
	} = context.data

	const handleSocialLogin = (user) => {
		context.setUser(user)
	}
	
	const handleSocialLoginFailure = (err) => {
		console.log(err)
	}

	return(
		<div>
			{/* <SocialButton
				provider='facebook'
				appId='YOUR_APP_ID'
				onLoginSuccess={handleSocialLogin}
				onLoginFailure={handleSocialLoginFailure}
			>
				Login with Facebook
			</SocialButton> */}
			<SocialButton
				provider='google'
				appId={echoSocialLogin.echoGoogleClientId}
				onLoginSuccess={handleSocialLogin}
				onLoginFailure={handleSocialLoginFailure}
			>
				Login with Google
			</SocialButton>
		</div>
	)
}