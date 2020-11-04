/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import login components
import TwitterLogin from "react-twitter-login"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login'

// import components
import MyContext from '../../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
  faFacebookF,
	faGoogle,
} from '@fortawesome/free-brands-svg-icons'

// import css
import { jsx, css } from '@emotion/core'

export default ({ label = "Login" }) => {

	const context = useContext(MyContext)

	const {
		echo: {
			echoApiKeys: {
				echoFacebookAppId,
				echoGoogleClientId,
				echoTwitterConsumerKey,
				echoTwitterConsumerSecret
			}
		},
		event: {
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	const responseTwitter = (response) => {
		console.log(response)
	}

	const setLocalUser = (user) => {
		window.localStorage.setItem('echoUser', JSON.stringify(user))
	}

	const responseFacebook = (response) => {
		const user = {
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		}
		context.setUser(user)
		setLocalUser(user)
	}

	const googleResponse = (response) => {
		const user = {
			name: response.profileObj.name,
			email: response.profileObj.email,
			picture: response.profileObj.imageUrl
		}
		context.setUser(user)
		setLocalUser(user)
	}

	const googleError = (err) => {
		console.log(err)
	}

	// no keys found
	if (
		!echoTwitterConsumerSecret 
		&& !echoTwitterConsumerSecret
		&& !echoFacebookAppId
		&& !echoGoogleClientId
	) {
		return <></>
	}

	return(
		<div
			css={css`
				display: flex;
				align-items: center;
				justify-content: flex-end;

				span {
					margin-right: 0.5rem;
				}

				button {
					background: rgba(2555,2555,2555,0.05);
					outline: none;
					border: 0;
					padding: 0;
					margin: 0 0.25rem 0 0;
					color: ${eventColors.primaryTextColor};
					width: 2rem;
					height: 2rem;
					border-radius: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;

					&:hover {
						background: rgba(255,255,255,0.15);
					}
				}
			`}
		>

			<span>{label}</span>
			
			{echoTwitterConsumerKey && echoTwitterConsumerSecret && false && (
				<TwitterLogin 
					authCallback={responseTwitter}
					consumerKey={echoTwitterConsumerKey}
					consumerSecret={echoTwitterConsumerSecret}
					callbackUrl={`${echoSettings.twitterCallback}`}
				>
					<button>
						<FontAwesomeIcon
							icon={faTwitter}
							fixedWidth
							aria-hidden="true"
							title={"Login with Twitter"}
						/>
					</button>
				</TwitterLogin>
			)}

			{echoFacebookAppId && (
				<FacebookLogin
					appId={echoFacebookAppId}
					callback={responseFacebook}
					fields="name,email,picture"
					render={renderProps => (
						<button onClick={renderProps.onClick}>
							<FontAwesomeIcon
								icon={faFacebookF}
								fixedWidth
								aria-hidden="true"
								title={"Login with Facebook"}
							/>
						</button>
					)}
				/>
			)}

			{echoGoogleClientId && (
				<GoogleLogin
					clientId={echoGoogleClientId}
					buttonText="Login"
					onSuccess={googleResponse}
					onFailure={googleError}
					render={renderProps => (
						<button 
							onClick={renderProps.onClick} 
							disabled={renderProps.disabled}
						>
								<FontAwesomeIcon
									icon={faGoogle}
									fixedWidth
									aria-hidden="true"
									title={"Login with Google"}
								/>
						</button>
					)}
				/>
			)}

		</div>
	)
}
