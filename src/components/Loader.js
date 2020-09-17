/** @jsx jsx */

// import libs
import React from 'react'

// import components
import RiseLoader from 'react-spinners/RiseLoader'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default () => (
	<div>
		<RiseLoader 
			size={18}
			color={"rgba(255,255,255,0.3)"}
		/>
	</div>
)