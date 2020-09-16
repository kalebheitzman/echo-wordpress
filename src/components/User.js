/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import Components
import MyContext from '../context/Context'
import SocialLogin from './SocialLogin'

export default () => {

	const context = useContext(MyContext)

	const {
		user
	} = context

	console.log(user)

	if (!user) {
		return(
			<div
				css={css`
					display: flex;
					justify-content: flex-end;
					align-items: center;
				`}
			>
				<SocialLogin />
			</div>
		)
	}

	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				justify-content: flex-end;

				img {
					width: 40px;
					height: 40px;
					border-radius: 40px;
					margin-left: 0.75rem;
					margin-bottom: 0;
					border: 2px solid var(--highlight-primary-color);	
				}

				p {
					margin: 0;
					padding: 0;
				}
			`}
		>
			<p>{user.profile.name}</p>
			<img src={user.profile.profilePicURL} />
		</div>
	)
}