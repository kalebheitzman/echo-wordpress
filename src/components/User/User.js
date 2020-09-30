/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default () => {

  const context = useContext(MyContext)

  const {
    user
  } = context

  return(
    <div
			css={css`
				display: flex;
				align-items: center;
				justify-content: flex-end;
				img {
					width: 40px;
					height: 40px;
					border-radius: 40px;
					margin-bottom: 0;
					border: 2px solid var(--highlight-primary-color);	
				}
				p {
					margin: 0 1rem 0 0;
					padding: 0;
				}
			`}
		>
			<button
				onClick={context.logout}
				css={css`
					cursor: pointer;
					background: rgba(255,255,255,0.1);
					border-radius: 4px;
					padding: 0.5rem 0.75rem !important;
					margin: 0 1rem 0 0;
					outline: 0;
					border: 0;
					color: var(--highlight-primary-color);

					&:hover {
						background: rgba(255,255,255,0.2);
					}
				`}
			>
				Logout
			</button>
			<p
				css={css`
					display: none;

          ${mq('tablet_up')} {
						display: block;
					}
				`}
			>
				{user.name}
			</p>
			<img src={user.picture} alt={user.name} />
		</div>
  )
}