/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ options }) => {

	const context = useContext(MyContext)

	return (
		<div
			css={css`

				input {
					margin-right: 0.25rem;
					cursor: pointer;
				}
				label {
					cursor: pointer;
				}
			`}
		>
			{options.map((option, i) => (
				<div key={i}>
					<label
						onClick={() => {
							console.log(i, option)
						}}
					>
						<input name="options" value={i} type="radio" />
						<span>{option.eventOptionQuestion}</span>
					</label>
				</div>
			))}
		</div>
	)
}