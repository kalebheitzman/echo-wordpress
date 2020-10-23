// import libs
import React, { useContext, useState, useEffect } from 'react'

// import components
import MyContext from '../../context/Context'
import { useHistory } from 'react-router-dom'

export default (props) => {

	const history = useHistory()

	const context = useContext(MyContext)

	const [navigate, setNavigate] = useState(true)

	const [navConfirmed, setNavConfirmed] = useState(true)

	useEffect(() => {
		if (context.room.eventRoomSlug !== undefined) {
			if (props.to === "/" || props.to === "/main-stage" ) {
				setNavigate(false)
				setNavConfirmed(false)
			}
		}	
	}, [context.room])

	return(
		<button
			onClick={() => {

				if (!navigate && !navConfirmed) {
					context.setTo(props.to)
					context.setConfirm(true)
				}

				if (navigate && navConfirmed) {
					history.push(props.to)
				}
			}}
		>
			{props.children}
		</button>
	)

}
