/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../../context/Context'

export default ({ content }) => {

	const context = useContext(Context)

	const {
		event: {
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	return(
		<div
			css={css`
				
				${mq('tablet_up')} {

				}

				a {
					color: ${eventColors.primaryBackground};
					text-decoration: none;
					transition: all 85ms ease-out;

					&:hover {
						text-decoration: underline;
					}
				}
			`}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}