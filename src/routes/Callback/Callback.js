import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { signupWithDiscord } from 'redux/modules/auth/actions'
import { authStatusSelector } from 'redux/modules/auth/selectors'
import { Loader } from 'components/Loader'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Callback = ({ signupWithDiscord, authStatus }) => {

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const code = searchParams.get('code')
    signupWithDiscord({
      body: { code },
      success: (res) => {
        history.push('/dashboard?authed=true')
      },
      fail: () => history.push('/dashboard')
    })
  }, [location])

  return (
    <>
      <Mobile>
        {authStatus === 'PENDING' && <Loader mobile />}
      </Mobile>
      <Default>
        {authStatus === 'PENDING' && <Loader />}
      </Default>
    </>
  )
}

Callback.propTypes = {
  signupWithDiscord: PropTypes.func,
  authStatus: PropTypes.any,
}

const selector = createStructuredSelector({
  authStatus: authStatusSelector,
})

const actions = {
  signupWithDiscord,
}

export default compose(connect(selector, actions))(Callback)
