/** @jsx jsx */

// import libs
import React, { useContext, useState } from 'react'
import { updateChoose } from '../../utils/api'

// import components
import MyContext from '../../context/Context'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {
	
	const context = useContext(MyContext)
	const [submitted, setSubmitted] = useState(false)

	return (
		<div
			css={css`
				display: flex;
				align-items: center;

				input {
					margin-right: 0.25rem;
					cursor: pointer;
				}
				label {
					margin-right: 1rem;

					&[disabled] {
						cursor: default;
					}
				}
			`}
		>
			<div
				onClick={() => {
					updateChoose(1)
					setSubmitted(true)
				}}
			>
				<input name="choose" value="1" type="radio" disabled={submitted} />
				<label>Yes</label>
			</div>
			<div
				onClick={() => {
					updateChoose(0)
					setSubmitted(true)
				}}
			>
				<input name="choose" value="0" type="radio" disabled={submitted} />
				<label>No</label>
			</div>
		</div>
	)
}