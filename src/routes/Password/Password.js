import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import svgPwdCircle from 'Assets/Shapes/Password/passwordpage-circle.svg'
import svgPwdFilledCircle from 'Assets/Shapes/Password/passwordpage-filled-circle.svg'
import svgPwdWavebottom from 'Assets/Shapes/Password/passwordpage-wave-bottom.svg'
import svgPwdTopRighttLine from 'Assets/Shapes/Password/passwordpage-top-right-line.svg'
import svgPwdDotPattern from 'Assets/Shapes/dot-pattern.svg'
import svgMobileBottom from 'Assets/Shapes/Dashboard/mobile-dashboard-bottom.svg'
import { CreditForm, MobileCreditForm } from 'containers/CreditForm'
import { MobileHeader } from 'containers/Header'
import { MobileFollowTwitter } from 'components/FollowTwitter'
import { checkGlobalPassword } from 'redux/modules/global/actions'
import { globalStatusSelector } from 'redux/modules/global/selectors'
import { checkStripeQuantity } from 'redux/modules/stripe/actions'
import { stripeStatusSelector } from 'redux/modules/stripe/selectors'
import { Loader } from 'components/Loader'
import './Password.scss'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Password = ({ checkGlobalPassword, checkStripeQuantity, globalStatus, stripeStatus }) => {

  const [invalidValue, setInvalid] = useState(false)
  const history = useHistory()
  const handleSubmit = (inputValue) => {
    checkGlobalPassword({
      body: { password: inputValue },
      success: (res) => {
        setInvalid(res.data.code === '200' ? false : true)
        checkStripeQuantity({ body: { sku_id: 'sku_ISOUAPTY0ASKHZ' } })
        history.push('/')
      },
      fail: () => setInvalid(true)
    })
  }

  return (
    <>
      <Mobile>
        {(globalStatus === 'PENDING' || stripeStatus === 'PENDING') && <Loader mobile />}
        <div className='visesole-mobile-password'>

          <MobileHeader />

          <MobileCreditForm
            className='mobile-credit-form-area'
            formType='password'
            onSubmit={handleSubmit}
            invalid={invalidValue}
          />
          <div className='mobile-followtwitter-area'>
            <MobileFollowTwitter />
            <img src={svgMobileBottom} className='visesole-images svgMobileBottom' alt='svgMobileBottom' />
            <div className='visesole-svglayer'></div>
          </div>

        </div>
      </Mobile>

      <Default>
        {(globalStatus === 'PENDING' || stripeStatus === 'PENDING') && <Loader />}
        <div className='visesole-password'>
          <img src={svgPwdFilledCircle} className='visesole-images svgPwdFilledCircle' alt='filledCircle' />
          <img src={svgPwdCircle} className='visesole-images svgPwdCircle' alt='circle' />
          <img src={svgPwdWavebottom} className='visesole-images svgPwdWavebottom' alt='waveBottom' />
          <img src={svgPwdTopRighttLine} className='visesole-images svgPwdTopRighttLine' alt='TopLeftLine' />
          <img src={svgPwdDotPattern} className='visesole-images svgPwdDotPattern' alt='dotPatter' />
          <div className='visesole-svglayer'></div>

          <CreditForm
            onSubmit={handleSubmit}
            formType='password'
            invalid={invalidValue}
            className='visesole-credit-form ui center' />
        </div>
      </Default>
    </>
  )
}

Password.propTypes = {
  checkGlobalPassword: PropTypes.func,
  checkStripeQuantity: PropTypes.func,
  stripeStatus: PropTypes.any,
  globalStatus: PropTypes.any,
}

const selector = createStructuredSelector({
  stripeStatus: stripeStatusSelector,
  globalStatus: globalStatusSelector,
})

const actions = {
  checkGlobalPassword,
  checkStripeQuantity,
}

export default compose(connect(selector, actions))(Password)
