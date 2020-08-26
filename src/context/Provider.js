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

	useEffect(() => {
		setState({
			count: 0
		})

		client
			.query({
				query: gql`
					query EventQuery {
						event(id: ${echoSettings.eventID}, idType: DATABASE_ID) {
							title(format: RENDERED)
							content(format: RENDERED)
							eventInformation {
								eventEndTime
								eventLivestreamUrl
								eventStartTime
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
				loading: loading,
				error: error,
				state: state, // state stored in context
				nonce: echoSettings.nonce, // nonce for authenticated requests
				data: data
			}}
		>
			{children}
		</MyContext.Provider>
	)
}

