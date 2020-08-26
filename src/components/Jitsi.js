/** @jsx jsx */

// import libs
import React, { useState, useEffect } from 'react'

// import components
import Loader from './Loader'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../utils/media'

export default ({ room }) => {

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
		console.log(script)
		document.body.appendChild(script)

		return loadJitsiScriptPromise
	}

	const initilizeJitsi = async (cb) => {
		if (!window.JitsiMeetExternalAPI) {
			await loadJitsiScript()
		}

		const _jitsi = new window.JitsiMeetExternalAPI('meet.jit.si', {
			parentNode: document.getElementById(jitsiContainerId),
			roomName: room.eventRoomSlug
		})

		setJitsi(_jitsi)
	}

	useEffect(() => {
		initilizeJitsi()

		return () => jitsi?.dispose?.()
	}, [])

	return(
		<div
			className="echo-jitsi-container"
			css={css`
				background: #374e62;
			`}
			id={jitsiContainerId}
		/>
	)
}