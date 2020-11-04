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

	let arrow = faAngleRight
	if (context.toggle) {
		arrow = faAngleLeft
	}
	if (!context.toggle) {
		arrow = faAngleRight
	}
	console.log(context.toggle)

  return (
    <div
      css={css`
        display: none;

        button {
					cursor: pointer;
          font-size: 2rem;
          height: 3rem;
          width: 3rem;
					border-radius: 3rem;
					border: 0;
					outline: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #eee;
          color: #ccc;
          font-weight: bold;
          text-decoration: none;
					transition: all 185ms ease-out;
					
          &:hover {
            background: #e9e7ea;
            color: #bbb;
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