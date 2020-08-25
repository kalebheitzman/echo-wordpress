/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import Wrapper from './Wrapper'

const Main = () => (
	<>
		<h1>Lobby</h1>
	</>
)

const Aside = () => (
	<>
		<h3>Aside</h3>
	</>
)

export default () => {

	return(
		<Wrapper main={<Main />} aside={<Aside />} />
	)
}