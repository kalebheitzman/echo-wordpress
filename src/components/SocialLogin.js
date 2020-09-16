/** @jsx jsx */

// import libs
import React, { useContext, Component } from 'react'

// import components
import SocialButton from './SocialButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
	faGoogle,
	faInstagram,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'

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

	const services = [
		{
			provider: 'facebook',
			icon: faFacebookF,
			label: 'Login with Facebook',
			appId: echoSocialLogin.echoFacebookAppId,
		},
		{
			provider: 'instagram',
			icon: faInstagram,
			label: 'Login with Instagram',
			appId: echoSocialLogin.echoFacebookAppId,
		},
		{
			provider: 'google',
			icon: faGoogle,
			label: 'Login with Google',
			appId: echoSocialLogin.echoGoogleClientId,
		},
	]

	const handleSocialLogin = (user) => {
		context.setUser(user)
	}
	
	const handleSocialLoginFailure = (err) => {
		console.log(err)
	}

	return(
		<div
			css={css`
				display: flex;
				align-items: center;

				span {
					margin-right: 0.5rem;
				}

				button {
					background: rgba(0,0,0,0.05);
					outline: none;
					border: 0;
					padding: 0;
					margin: 0 0.25rem 0 0;
					color: var(--highlight-primary-color);
					width: 2rem;
					height: 2rem;
					border-radius: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}
		>
			<span>Login</span>
			{services.map(service => (
				<SocialButton
					provider={service.provider}
					appId={service.appId}
					onLoginSuccess={handleSocialLogin}
					onLoginFailure={handleSocialLoginFailure}
				>
					<FontAwesomeIcon
						icon={service.icon}
						fixedWidth
						aria-hidden="true"
						title={service.label}
					/>
					<span
						css={css`
							display: none;
						`}
					>
						{service.label}
					</span>
				</SocialButton>
			))}
		</div>
	)
}