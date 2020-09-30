/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ content }) => {

	return(
		<div
			css={css`
				
				${mq('tablet_up')} {

				}
			`}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}