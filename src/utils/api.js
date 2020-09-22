// imports 
import React from 'react'
import { client } from './apollo'
import { gql, useMutation } from '@apollo/client'

// get poll data
export const getPollData = async ({ id }) => {
	
	return await Promise.all(
		[
			client
				.query({
					query: gql`
						query PollDataQuery($id: ID!) {
							event(id: $id) {
								id
								pollsInformation {
									eventPolls {
										eventPollData
									}
								}
							}
						},
					`,
					variables: {
						id: id
					}
				})
				.then(results => {
					return results
				})
		]
	)
	.then(data => {
		return data[0].data.event
	})
}
 
// update choose poll
export const updateChoose = ( data ) => {
	const { eventID } = echoSettings
	console.log(eventID, data) 
	console.log('update chooose')
}

// update scales poll
export const updateScales = ( data ) => {
	const { eventID } = echoSettings
	console.log(eventID, data)
	console.log('update scales')
}

// update options poll
export const updateOptions = ( data ) => {
	const { eventID } = echoSettings
	console.log(eventID, data)
	console.log('update options')
}