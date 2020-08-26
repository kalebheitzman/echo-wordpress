/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ src, srcSet }) => {

	return(
		<img
			src={src}
			srcSet={srcSet}
			css={css`
				border-radius: 4px;
			`}
		/>	
	)
}