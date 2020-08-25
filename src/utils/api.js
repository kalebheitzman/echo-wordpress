'use strict';

// use axios to make requests
const axios = require('axios')

// WordPress API
export default class WpApi {

	constructor({ api = null, nonce = null }) {
		this.api = api
		axios.defaults.headers.common['X-WP-Nonce'] = nonce
	}

	getCurrentUser = (responseCb, errorCb) => {
		let url = `${this.api}wp/v2/users/me`
		axios.get(url)
			.then(response => {
				return responseCb(response.data)
			})
			.catch(error => {
				return errorCb(error)
			})
	}

}
