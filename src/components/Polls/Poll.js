/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'
import Choose from './Choose'
import Options from './Options'
import Scale from './Scale'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ poll }) => {
	
	const context = useContext(MyContext)

	return (
		<li className={poll.eventPollType}>
			<p>{poll.eventPollQuestion}</p>

			{poll.eventPollType === 'choose' && (
				<Choose context={context} />
			)}

			{poll.eventPollType === 'scale' && (
				<Scale context={context} />
			)}

			{poll.eventPollType === 'options' && (
				<Options context={context} options={poll.eventPollOptions} />
			)}

		</li>
	)
}
