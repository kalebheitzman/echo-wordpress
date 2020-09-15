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
			<SocialLogin />
		)
	}

	return (
		<div
			css={css`
				display: flex;
				align-items: center;

				img {
					width: 40px;
					height: 40px;
					border-radius: 40px;
					margin-left: 0.5rem;
				}
			`}
		>
			<p>{user.profile.name}</p>
			<img src={user.profile.profilePicURL} />
		</div>
	)
}