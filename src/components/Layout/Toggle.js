/** @jsx jsx */

// import libs
import React, { useEffect, useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import MyContext from '../../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleRight,
	faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'

export default () => {

	const context = useContext(MyContext)

	const {
		event: {
			eventBranding: {
				eventColors
			}
		}
	} = context.data

	let arrow = faAngleRight
	if (context.toggle) {
		arrow = faAngleLeft
	}
	if (!context.toggle) {
		arrow = faAngleRight
	}

	if (context.view === 'lobby') {
		return <></>
	}

  return (
    <div
      css={css`
        display: none;

        button {
					cursor: pointer;
          font-size: 1.2rem;
          height: 2rem;
          width: 2rem;
					border-radius: 2rem;
					border: 0;
					outline: 0;
          display: flex;
          justify-content: center;
					align-items: center;
					text-align: center;
          background: #eee;
          color: #ccc;
          font-weight: bold;
          text-decoration: none;
					transition: all 185ms ease-out;
					
          &:hover {
            background: #e9e7ea;
            color: #bbb;
					}
					
					&.close {
						background: ${eventColors.primaryBackground};
						color: ${eventColors.primaryTextColor};
					}
        }

        ${mq('tablet_up')} {
          display: flex;
          justify-content: center;
          align-items: center;  
        }
      `}
    >
			<button
				onClick={() => context.setToggle(!context.toggle)}
				className={!context.toggle ? 'open' : 'close'}
			>
				<FontAwesomeIcon
					icon={arrow}
					fixedWidth
					aria-hidden="true"
					title={`Toggle Sidebar`}
					css={css`
						text-align: center;
					`}
				/>
			</button>
    </div>
  )
}