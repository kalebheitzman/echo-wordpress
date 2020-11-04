/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default ({ children }) => {

	const context = useContext(MyContext)

	return(
		<div
			css={css`
				grid-area: wrapper;
				overflow-y: scroll;

				${mq('tablet_up')} {
					display: grid;
					grid-template-areas: 
						"aside main"
						"aside footer";
					grid-template-rows: 1fr 80px;
					height: calc(100vh - 100px);
					overflow: hidden;
					transition: all 85ms ease-out;

					&.open {
						grid-template-columns: 300px 1fr;
					}

					&.close {
						grid-template-columns: 0px 1fr;
					}
				}
			`}
			className={!context.toggle ? 'open' : 'close'}
		>
			{children}
		</div>
	)
}