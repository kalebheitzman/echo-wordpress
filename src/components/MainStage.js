/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Wrapper from './Wrapper'
import LiveStream from './Livestream'
import ScheduleAside from './ScheduleAside'

export default () => {

	return(
		<Wrapper main={<LiveStream />} aside={<ScheduleAside />} />
	)
}