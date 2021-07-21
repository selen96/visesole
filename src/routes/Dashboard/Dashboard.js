import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import svgCircle from 'Assets/Shapes/Dashboard/dashboard-circle.svg'
import svgFilledCircle from 'Assets/Shapes/Dashboard/dashboard-filled-circle.svg'
import svgWavebottom from 'Assets/Shapes/Dashboard/dashboard-wave-bottom.svg'
import svgTopLeftLine from 'Assets/Shapes/Dashboard/dashboard-top-left-line.svg'
import svgDotPattern from 'Assets/Shapes/dot-pattern.svg'
import svgMobileBottom from 'Assets/Shapes/Dashboard/mobile-dashboard-bottom.svg'
import { CreditForm, MobileCreditForm } from 'containers/CreditForm'
import { MobileHeader } from 'containers/Header'
import { MobileFollowTwitter } from 'components/FollowTwitter'
import { Loader } from 'components/Loader'
import { checkLicenseKey, saveLicenseKey } from 'redux/modules/auth/actions'
import { authStatusSelector } from 'redux/modules/auth/selectors'
import { authTokenSelector } from 'redux/modules/auth/selectors'
import { DISCORD_AUTH_URL } from 'helpers/utils'
import './Dashboard.scss'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Dashboard = ({ checkLicenseKey, saveLicenseKey, authToken, authStatus }) => {
  const [invalidValue, setInvalid] = useState(false)

  const history = useHistory()
  const query = new URLSearchParams(window.location.search)

  useEffect(() => {
    !query.get('authed') && window.location.replace(DISCORD_AUTH_URL)
  }, [])

  const handleSubmit = (inputValue) => {
    checkLicenseKey({
      body: {
        token: authToken,
        license_key: inputValue,
      },
      success: (res) => {
        setInvalid(!res.data.isMatched)
        if (res.data.isMatched) {
          saveLicenseKey(inputValue)
          history.push('/license')
        }
      },
      fail: ({ data }) => {
        setInvalid(true)
        // if (data.code === 401) {
        //   localStorage.removeItem('visesole_auth')
        //   window.location.replace(`${APP_BASE_URL}`)
        // }
      }
    })
  }

  return (
    <>
      <Mobile>
        {authStatus === 'PENDING' && <Loader mobile />}

        <MobileHeader />

        <MobileCreditForm
          className='mobile-credit-form-area'
          formType='dashboard'
          onSubmit={handleSubmit}
          invalid={invalidValue}
        />
        <div className='mobile-followtwitter-area'>
          <MobileFollowTwitter />
          <img src={svgMobileBottom} className='visesole-images svgMobileBottom' alt='svgMobileBottom' />
          <div className='visesole-svglayer'></div>
        </div>
      </Mobile>

      <Default>
        {authStatus === 'PENDING' && <Loader />}

        <div className='visesole-dashboard'>
          <img src={svgFilledCircle} className='visesole-images svgFilledCircle' alt='filledCircle' />
          <img src={svgCircle} className='visesole-images svgCircle' alt='circle' />
          <img src={svgWavebottom} className='visesole-images svgWavebottom' alt='waveBottom' />
          <img src={svgTopLeftLine} className='visesole-images svgTopLeftLine' alt='TopLeftLine' />
          <img src={svgDotPattern} className='visesole-images svgDotPattern' alt='dotPatter' />

          <div className='visesole-svglayer'></div>

          <CreditForm
            onSubmit={handleSubmit}
            formType='license'
            invalid={invalidValue}
          />
        </div>
      </Default>
    </>
  )
}


Dashboard.propTypes = {
  checkLicenseKey: PropTypes.func,
  saveLicenseKey: PropTypes.func,
  authToken: PropTypes.any,
  authStatus: PropTypes.any,
}

const selector = createStructuredSelector({
  authToken: authTokenSelector,
  authStatus: authStatusSelector,
})

const actions = {
  checkLicenseKey,
  saveLicenseKey,
}

export default compose(connect(selector, actions))(Dashboard)
