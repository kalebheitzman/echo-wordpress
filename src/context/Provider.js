// import libs
import React, { useState, useEffect } from 'react'
import { client } from '../utils/apollo'
import { gql, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

// import components
import MyContext from './Context'

export default ({ children }) => {

	const [ state, setState ] = useState({})
	const [ data, setData ] = useState({})
	const [ loading, setLoading ] = useState(true)
	const [ error, setError ] = useState(false)
	const [ main, setMain ] = useState(false)
	const [ room, setRoom ] = useState({})
	const [ user, setUser ] = useState(false)
	const [ confirm, setConfirm ] = useState(false)
	const [ chats, setChats ] = useState([])
	const [ to, setTo ] = useState(false)

	const history = useHistory()

	useEffect(() => {

		setTo(history.location.pathname)

		// set main stage if necessary
		if (window.location.hash !== '#/') {
			setMain('main-stage')
		}

		let user = window.localStorage.getItem('echoUser')

    if (null !== user) {
      user = JSON.parse(user)
      setUser(user)
    }

		// const echoUser = localStorage.getItem('echoUser')
		// if (echoUser) {
		// 	client
		// 		.query({
		// 			query: gql`
		// 				query GET_USER($id: ID!) {
		// 					user(id: $id) {
		// 						id
		// 						avatar {
		// 							url
		// 						}
		// 						name
		// 						userId
		// 					}
		// 				}
		// 			`,
		// 			variables: { "id": echoUser }
		// 		})
		// 		.then(result => {
		// 			setUser(result.data.user)
		// 		})
		// 		.catch(err => {
		// 			setError(err)
		// 		})
		// }

		client
			.query({
				query: gql`
					query EventQuery {
						echo {
							echoApiKeys {
								echoGoogleClientId
								echoFacebookAppId
								echoTwitterConsumerKey
								echoTwitterConsumerSecret
							}
						}
						event(id: ${echoSettings.eventID}, idType: DATABASE_ID) {
							id
							title(format: RENDERED)
							content(format: RENDERED)
							slug
							eventBranding {
								eventFavicon {
									sourceUrl
								}
								eventLogo {
									srcSet
									sourceUrl
								}
								eventLobbyImage {
									srcSet
									sourceUrl
								}
								eventColors {
									bodyBackgound
									htmlBackground
									primaryBackground
									primaryBackgroundHover
									primaryTextColor
									textColor
								}
							} 
							eventInformation {
								eventEndTime
								eventLivestreamUrl
								eventLivestreamType
								eventStartTime
							}
							roomsInformation {
								eventRooms {
									eventRoomSlug
									eventRoomType
									eventRoomTitle
									eventRoomDescription
									eventExternalMeetingUrl
									eventRoomImage {
										sourceUrl(size: THUMBNAIL)
									}
								}
							}
							scheduleInformation {
								eventSchedule {
									scheduleItemDescription
									scheduleItemTime
									scheduleItemTitle
								}
							}
							qaInformation{
								eventQuestions {
									eventQuestion
									eventAnswer
								}
							}
							pollsInformation {
								eventPolls {
									eventPollQuestion
									eventPollType
									eventPollOptions {
										eventOptionQuestion
									}
									# eventPollData
								}
							}
							eventSettings {
								enableMainStage
								enableQa
								enableRooms
								enableChat
								mainStageLabel
								qaLabel
								roomsLabel
								chatLabel
							}
							featuredImage {
								node {
									srcSet(size: ECHO_HERO)
        					sourceUrl(size: ECHO_HERO)								
								}
							}
						}
					}
				`
			})
			.then(result => {
				setData(result.data)
				setLoading(result.loading)

				// set jitsi room if necessary
				if ( window !== undefined && window.location.hash ) {
					const hash = window.location.hash
					if (hash.includes('/rooms/')) {
						const roomSlug = hash.split('/rooms/')[1]
						const rooms = result.data.event.roomsInformation.eventRooms
						setMain('rooms')
						const room = rooms.filter(item => {
							return item.eventRoomSlug === roomSlug
						})[0]
						setRoom(room)	
					}
				}
			})

	}, [])

	return(
		<MyContext.Provider
			value={{
				loading,
				error,
				state, // state stored in context
				nonce: echoSettings.nonce, // nonce for authenticated requests
				data,
				main, setMain,
				room, setRoom,
				user, setUser,
				logout: () => {
					setUser(false)
					localStorage.removeItem('echoUser')
				},
				confirm, setConfirm,
				chats, setChats,
				to, setTo,
			}}
		>
			{children}
		</MyContext.Provider>
	)
}

