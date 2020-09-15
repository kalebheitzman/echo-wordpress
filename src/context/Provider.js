// import libs
import React, { useState, useEffect } from 'react'
import { client } from '../utils/apollo'
import { gql } from '@apollo/client'

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

	useEffect(() => {

		// set main stage if necessary
		if (window.location.hash !== '#/') {
			setMain('main-stage')
		}

		setState({
			count: 0
		})

		client
			.query({
				query: gql`
					query EventQuery {
						projectEcho {
							echoSocialLogin {
								echoGoogleClientId
							}
						}
						event(id: ${echoSettings.eventID}, idType: DATABASE_ID) {
							title(format: RENDERED)
							content(format: RENDERED)
							eventInformation {
								eventEndTime
								eventLivestreamUrl
								eventStartTime
								eventLogo {
									srcSet
									sourceUrl
								}
								eventColors {
									bodyBackgound
									htmlBackground
									primaryBackgroundColor
									primaryBackgroundHover
									primaryTextColor
									textColor
								}
							}
							roomsInformation {
								eventRooms {
									eventRoomDescription
									eventRoomSlug
									eventRoomTitle
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
								}
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
				main,
				setMain,
				room,
				setRoom,
				user,
				setUser
			}}
		>
			{children}
		</MyContext.Provider>
	)
}

