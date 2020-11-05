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

	const showNotification = () => {
		console.log('show notification')
		let options = {
			body: "Welcome to the PrayerFast.",
			icon: sourceUrl,
			dir: "ltr"
		}

		let notification = new Notification("Notification Demo", options);

		setTimeout(function() { notification.close() }, 5000);
	}

	useEffect(() => {

		if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
			console.log("Notifications are supported");
			Notification.requestPermission()
		}
		
		showNotification()
		
	}, [])

	return(<></>)
}