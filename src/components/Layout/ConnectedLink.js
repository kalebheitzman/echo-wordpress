// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'
import { NavLink } from 'react-router-dom'

export default (props) => {

	const context = useContext(MyContext)

	const clone = (obj) => {
		if (null == obj || "object" != typeof obj) return obj;
		var copy = obj.constructor();
		for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		}
		return copy;
	}

	let newProps = clone(props)

	// if (context.room.eventRoomSlug !== undefined) {
	// 	delete newProps.onClick
	// }

	return <NavLink {...newProps} />
}
