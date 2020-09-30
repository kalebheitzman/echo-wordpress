/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import Livestream from './Livestream'

export default () => {

	const context = useContext(MyContext)

	return(
		<div
			css={css`
				
				${mq('tablet_up')} {

				}
			`}
		>
			{ 'rooms' === context.main && (
				<Livestream />
			)}
		</div>
	)
}