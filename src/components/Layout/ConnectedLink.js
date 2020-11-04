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
	const [className, setClassName] = useState("inactive")

	useEffect(() => {
		if (context.room.eventRoomSlug !== undefined) {
			if (props.to === "/" || props.to === "/main-stage" ) {
				setNavigate(false)
				setNavConfirmed(false)
			}
		}	
	}, [context.room])

	useEffect(() => {
		if (props.exact && context.to === props.to) {
			setClassName("active")
		}
		else if (!props.exact && context.to.includes(props.to)) {
			setClassName("active")
		}
		else {
			setClassName("inactive")
		}
	}, [context.to])

	return(
		<button
			className={className}
			onClick={() => {
				context.setTo(props.to)

				if (!navigate && !navConfirmed && context.main === 'rooms') {
					context.setConfirm(true)
				} 
				else {
					history.push(props.to)
					context.setToggle(false)
					context.setView(props.view)
				}
			}}
		>
			{props.children}
		</button>
	)

}
