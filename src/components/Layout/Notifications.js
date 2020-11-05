/** @jsx jsx */

// import libs
import React, { useEffect, useContext } from 'react'
import { client, GET_NOTIFICATIONS } from '../../utils/apollo'
import { useQuery } from '@apollo/client'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

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

	const { loading, error, data } = useQuery(GET_NOTIFICATIONS, {
		client: client,
		variables: {
			id: echoSettings.eventID
		},
		pollInterval: 15000
	})
	
	if (loading) return (<></>)
	if (error) return (<></>)

	const {
		event: {
			eventInformation: {
				eventNotification
			}
		}
	} = data
	console.log(eventNotification)

	if (eventNotification) {
		return(
			<div
				css={css`
					position: fixed;
					top: 0;
					right: 0;
					padding: 1rem;
					background: rgba(255,53,51,0.8);
					color: #fff;
					z-index: 10000;
					margin: 2rem;
					border-radius: 4px;

					p {
						margin: 0;
						padding: 0;
					}

					${mq('tablet_side')} {
						width: 300px;
						margin: 2rem 2rem 0 0;
					}

				`}
			>
				<p>{eventNotification}</p>
			</div>
		)
	}

	return(<></>)
}