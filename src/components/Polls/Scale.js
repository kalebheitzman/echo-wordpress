/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

	const context = useContext(MyContext)

	const range = [
		{
			int: 1,
		},
		{
			int: 2,
		},
		{
			int: 3,
		},
		{
			int: 4,
		},
		{
			int: 5,
		},
	]

	return(
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
					cursor: pointer;
				}
			`}
		>
			{range.map(item => (
				<label
					key={item.int}
					onClick={() => {
						console.log(item.int)
					}}
				>
					<input name="scale" value={item.int} type="radio" />
			<span>{item.int}</span>
				</label>
			))}
		</div>
	)
}