// import libs
import React, { useEffect, useContext } from 'react'

// import components
import MyContext from '../../context/Context'

export default () => { 

	const context = useContext(MyContext)

	const {
		event: {
			eventBranding: {
				eventFavicon: {
					sourceUrl
				}
			}
		}
	} = context.data

	useEffect(() => {

		if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
			console.log("Notifications are supported");
			Notification.requestPermission()
		}
		
		let options = {
			body: "Welcome to the PrayerFast.",
			icon: sourcreUrl,
			dir: "ltr"
		}

		new Notification("Notification Demo", options);
		
	}, [])

	return(<></>)
}