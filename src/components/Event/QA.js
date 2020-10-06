/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import components
import MyContext from '../../context/Context'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

	const context = useContext(MyContext)

	const {
		event: {
			qaInformation: {
				eventQuestions
			},
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	return(
		<ul
			css={css`
				margin: 0;
				padding: 0;
				
				li {
					padding: 1rem;
					border-bottom: 1px solid #efefef;
					margin-bottom: 0;

					h3 {
						margin: 0;
					}
				}
			`}
		>
			<li>
				<h3>Q&amp;A</h3>
			</li>
			{eventQuestions.map((qa, i) => (
				<li key={i}>
					<div
						css={css`
							display: grid;
							grid-template-columns: 40px 1fr;
							grid-gap: 1rem;
						`}
					>
						<span
							css={css`
								background: ${eventColors.primaryBackground};
								color: ${eventColors.primaryTextColor};
								border-radius: 40px;
								display: flex;
								justify-content: center;
								align-items: center;
								height: 40px;
								width: 40px;
							`}
						>
							Q
						</span>
						<div dangerouslySetInnerHTML={{ __html: qa.eventQuestion }} />
					</div>
					<div
						css={css`
							display: grid;
							grid-template-columns: 40px 1fr;
							grid-gap: 1rem;
							margin-top: 0.25rem;
						`}
					>
						<span
							css={css`
								background: #efefef;
								color: #aaa;
								border-radius: 40px;
								display: flex;
								justify-content: center;
								align-items: center;
								height: 40px;
								width: 40px;
							`}
						>
							A
						</span>
						<div 
							dangerouslySetInnerHTML={{ __html: qa.eventAnswer }} 
							css={css`
								font-style: italic;
								color: #888;
							`}
						/>
					</div>
				</li>
			))}
		</ul>
	)
}