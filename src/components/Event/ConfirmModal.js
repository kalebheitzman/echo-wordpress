/** @jsx jsx */

// import libs
import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default () => {

	const context = useContext(MyContext)

	const history = useHistory()

	const {
		event: {
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	if (!context.confirm) {
		return(<></>)
	}

	const handleConfirm = () => {
		console.log('confirm')
		context.setConfirm(false)
		context.setRoom({})
		context.setMain('main-stage')
		history.push(context.to)
	}

	const handleCancel = () => {
		console.log('cancel')
		context.setConfirm(false)
	}

	return(
		<div
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				background: rgba(0,0,0,0.5);
				width: 100%;
				height: 100%;
				z-index: 1000;
			`}
		>
			<div
				css={css`
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				`}
			>
				<div
					css={css`
						background: #fff;
						border-radius: 4px;
						padding: 2rem;

						${mq('tablet_up')} {
							width: auto;
						}

						button {
							border: 0;
							border-radius: 4px;
							padding: 0.75rem 1rem;
							outline: 0;
							cursor: pointer;
							background: #f7f7f7;
							
							&:first-of-type {
								margin-right: 0.5rem;
								background: ${eventColors.primaryBackground};
								color: ${eventColors.primaryTextColor};

								&:hover {
									background: ${eventColors.primaryBackgroundHover};
								}
							}

							&:hover {
								background: #eee;
							}
						}
					`}
				>
					<p>You are currently in a room. Are you sure you want to leave?</p>
					<div>
						<button
							onClick={() => handleConfirm()}
						>
							Yes
						</button>
						<button
							onClick={() => handleCancel()}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
