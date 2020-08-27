/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ src, srcSet, width = "100%", height = "30vh" }) => {

	return(
		<img
			src={src}
			srcSet={srcSet}
			css={css`
				border-radius: 4px;
				width: ${width};
				height: ${height};
				object-fit: cover;
				margin-bottom: 1.5rem;
			`}
		/>	
	)
}