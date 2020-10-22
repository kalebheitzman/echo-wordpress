/** @jsx jsx */

// import libs
import React, { useContext, useState, useEffect } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'

export default () => {

	const context = useContext(MyContext)
	
	const {
		room
	} = context

	const {
		event: {
			roomsInformation: {
				eventRooms
			}
		}
	} = context.data

	const jitsiRoom = room.eventRoomSlug

  const jitsiContainerId = 'jitsi-container-id'

  const [ jitsi, setJitsi ] = useState({})

	const loadJitsiScript = () => {
		let resolveLoadJitsiScriptPromise = null

		const loadJitsiScriptPromise = new Promise(resolve => {
			resolveLoadJitsiScriptPromise = resolve
		})

		const script = document.createElement('script')
		script.src = 'https://meet.jit.si/external_api.js'
		script.async = true
		script.onload = resolveLoadJitsiScriptPromise
		document.body.appendChild(script)

		return loadJitsiScriptPromise
	}

	const initilizeJitsi = async (cb) => {
		if (!window.JitsiMeetExternalAPI) {
			await loadJitsiScript()
		}

		document.getElementById(jitsiContainerId).innerHTML = ""
		
		let options = {}

		options.parentNode = document.getElementById(jitsiContainerId)
		options.roomName = jitsiRoom.eventRoomSlug !== undefined ? jitsiRoom.eventRoomSlug : context.room.eventRoomSlug
		//options.noSSL = true
		options.configOverwrite = {
			disableDeepLinking: true,
			startWithAudioMuted: true,
			startWithVideoMuted: true,
			enableNoisyMicDetection: false,
			resolution: 480,
			disableH264: true,
			liveStreamingEnabled: false,
			videoQuality: {
				disabledCodec: 'H264'
			},
			requireDisplayName: true,
			enableClosePage: false,
			disableInviteFunctions: true,
			doNotStoreRoom: true,
		}
		options.interfaceConfigOverwrite = {
			MOBILE_APP_PROMO: false,
			TOOLBAR_BUTTONS: [
				'microphone', 'camera', 'fodeviceselection', 'profile', 
				'chat', 'settings', 'videoquality', 'filmstrip', 'feedback',
        'tileview', 'help',
			],
			TILE_VIEW_MAX_COLUMNS: 3,
			CONNECTION_INDICATOR_DISABLED: true,
			DEFAULT_LOCAL_DISPLAY_NAME: 'me',
			DISABLE_VIDEO_BACKGROUND: true,
			RECENT_LIST_ENABLED: false,
			SHOW_JITSI_WATERMARK: false,
			SHOW_WATERMARK_FOR_GUESTS: false,
			TOOLBAR_ALWAYS_VISIBLE: true,
		}

		if (context.user) {
			options.userInfo = {
				email: context.user.email,
				displayName: context.user.name
			}
		}
	
		const _jitsi = new window.JitsiMeetExternalAPI('meet.jit.si', options)

		setJitsi(_jitsi)
	}

	useEffect(() => {
		jitsi?.dispose?.()
		context.setMain('rooms')
		initilizeJitsi()

		return () => jitsi?.dispose?.()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context])


  return(			
		<div
			className="echo-jitsi-container"
			css={css`
				background: #374e62;
				height: 100%;
				
				iframe {
					min-height: 80vh;

					${mq('tablet_up')} {
						min-height: auto;
					}
				}
			`}
			id={jitsiContainerId}
		/>
	)
}