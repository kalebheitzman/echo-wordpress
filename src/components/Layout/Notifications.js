// import libs
import React, { useEffect } from 'react'

export default () => {

	useEffect(() => {

		if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
			console.log("Notifications are supported");
			Notification.requestPermission()
		}
		
	}, [])

	return(<></>)
}