/** @jsx jsx */

// import libs
import React, { useContext } from 'react'

// import css
import { jsx, css } from '@emotion/core'

// import components
import MyContext from '../../context/Context'
import SocialLogin from './SocialLogin'
import User from './User'

export default () => {

  const context = useContext(MyContext)

  return(
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >

      {!context.user && (
        <SocialLogin />
      )}
      {context.user && (
        <User />
      )}
    </div>
  )
}