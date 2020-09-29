/** @jsx jsx */

// import libs
import React, { useContext, Component } from 'react'
import { client } from '../../utils/apollo'
import { gql, useMutation } from '@apollo/client'

// import components
import SocialButton from './SocialButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
	faGoogle,
} from '@fortawesome/free-brands-svg-icons'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import Components
import MyContext from '../../context/Context'

export default () => {

	const context = useContext(MyContext)

	const {
		projectEcho: {
			echoSocialLogin
		},
		event: {
			slug
		}
	} = context.data
	
	const services = [
		{
			provider: 'google',
			icon: faGoogle,
			label: 'Login with Google',
			appId: echoSocialLogin.echoGoogleClientId,
			redirect: false,
		},
		{
			provider: 'facebook',
			icon: faFacebookF,
			label: 'Login with Facebook',
			appId: echoSocialLogin.echoFacebookAppId,
			redirect: false,
		},
	]

	const getUser = async (email) => {
		return await client
			.query({
				query: gql`
					query GET_USER($id: ID!) {
						user(id: $id, idType: EMAIL) {
							id
							avatar {
								url
							}
							name
							userId
						}
					}
				`,
				variables: { "id": email }
			})
			.then(result => {
				return result.data.user
			})
			.catch(err => {
				return err
			})
	}

	const registerUser = async (userInput) => {
		return await client
			.mutate({
				mutation: gql`
					mutation REGISTER_USER($input: RegisterUserInput!) {
						registerUser(input: $input) {
							user {
								id
								name
								userId
								avatar {
									url
								}
							}
						}
					}
				`,
				variables: userInput
			})
			.then(result => {
				return result.data.registerUser.user
			})
			.catch(err => {
				return err
			})
	}

	const updateUser = (userInput) => {

	}

	const handleSocialLogin = (socialUser) => {

		const userInput = {
			"input": {
				"clientMutationId": "RegisterUser",
				"username": socialUser.profile.email,
				"email": socialUser.profile.email,
				"nicename": socialUser.profile.name,
				"displayName": socialUser.profile.name,
				"firstName": socialUser.profile.firstName,
				"lastName": socialUser.profile.lastName,
			}
		}

		// get user
		getUser(socialUser.profile.email)
			// user exists
			.then(user => {
				if (!user) {
					registerUser(userInput)
						.then(user => {
							// set new user
							const echoUser = Object.assign({
								profilePicURL: socialUser.profile.profilePicURL
							}, user);
							console.log(echoUser)
							localStorage.setItem('echoUser', echoUser.id)
						})
						.catch(err => {
							console.log(err)
						})
				}
				else {
					// set already existing user
					const echoUser = Object.assign({
						profilePicURL: socialUser.profile.profilePicURL
					}, user);
					localStorage.setItem('echoUser', echoUser.id)
					context.setUser(echoUser)
				}
			})
			// an error occurred
			.catch(err => {
				console.log(err)
			})

		// register user
		// const registerUserData = registerUser(userInput)

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
					cursor: pointer;
				}
			`}
		>
			<span>Login</span>
			{services.map((service, i) => (
				<SocialButton
					key={i}
					provider={service.provider}
					appId={service.appId}
					redirect={service.redirect ? service.redirect : null}
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