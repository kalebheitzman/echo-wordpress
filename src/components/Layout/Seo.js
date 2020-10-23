// import libs
import React from 'react'
import { Helmet } from 'react-helmet-async'

export default ({ pageTitle, siteTitle }) => {

	return(
		<Helmet>
			<title>{pageTitle} | {siteTitle}</title>
		</Helmet>
	)
}