// import libs
import React from 'react'

// import social logins
import SocialLogin from 'react-social-login'

const SocialButton = (props) => (
	<button onClick={props.triggerLogin} {...props}>
		{props.children}
	</button>
)

export default SocialLogin(SocialButton)