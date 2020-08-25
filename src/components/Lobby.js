/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import Wrapper from './Wrapper'

const Main = () => (
	<MyContext.Consumer>
		{context => {
			console.log(context)
			return(
				<h1>Lobby</h1>				
			)
		}}
	</MyContext.Consumer>
)

const Aside = () => (
	<MyContext.Consumer>
		{context => {
			console.log(context)
			return(
				<h1>Aside</h1>				
			)
		}}
	</MyContext.Consumer>
)

export default () => {

	return(
		<Wrapper main={<Main />} aside={<Aside />} />
	)
}