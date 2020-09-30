/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

	return(
		<footer
			className="echo-footer"
			css={css`
				grid-area: footer;
				color: #bbb;
				padding: 2rem;
				display: flex;
				align-items: center;

				${mq('tablet_up')} {
						padding: 2rem;
						justify-content: flex-end;
						border-top: 1px solid #eee;    
				}

				p {
						margin: 0;
				}
			`}
		>
			<div>
				&copy; 2020 TCM International Institute
			</div>
		</footer>
	)
}