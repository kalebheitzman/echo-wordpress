/** @jsx jsx */

// import libs
import React from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

// import components
import MyContext from '../context/Context'
import Wrapper from './Wrapper'

const Main = ({ data }) => {

	const {
		eventBy: {
			title,
			content
		}
	} = data

	return (
		<div
			css={css`

			${mq('tablet_up')} {
				padding: 4rem;
			}
			`}
		>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	)
}

const Aside = () => (
	<MyContext.Consumer>
		{context => {

 			return(
				 <>
					<h3>Aside</h3>	
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
					<br />			
				</>
			)
		}}
	</MyContext.Consumer>
)

export default ({ data }) => {

	return(
		<Wrapper main={<Main data={data} />} aside={<Aside />} />
	)
}