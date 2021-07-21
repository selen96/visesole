import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { stripeCheckout } from 'stripe'
import { LicenseForm, MobileLicenseForm } from 'containers/LicenseForm'
import { LicenseHeader } from 'containers/Header'
import { FollowTwitter } from 'components/FollowTwitter'
import { MobileHeader } from 'containers/Header'
import { MobileFollowTwitter } from 'components/FollowTwitter'
import svgLogOut from 'Assets/Icons/log-out.svg'
import svgLicenseBottom from 'Assets/Shapes/Dashboard/license-circle.png'
import svgMobileBottom from 'Assets/Shapes/Dashboard/mobile-dashboard-bottom.svg'
import { licenseKeySelector, licenseActivationSelector, currentUserSelector } from 'redux/modules/auth/selectors'
import { checkStripeQuantity } from 'redux/modules/stripe/actions'
import { stripeStatusSelector } from 'redux/modules/stripe/selectors'
import { unbindLicenseKey } from 'redux/modules/auth/actions'
import { authStatusSelector } from 'redux/modules/auth/selectors'
import { Loader } from 'components/Loader'
import './License.scss'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const License = ({
  licenseKey,
  isLicenseActivated,
  checkStripeQuantity,
  unbindLicenseKey,
  currentUser,
  stripeStatus,
  authStatus,
}) => {
  const history = useHistory()

  const [isLicenseVisible, setLicenseVisible] = useState(false)
  const [isCheckoutLoading, setCheckoutLoading] = useState(false) // will show loader with this

  const handleHide = (inputValue) => {
    const param = isLicenseVisible ? false : true
    setLicenseVisible(param)
  }

  const handleLicenseAction = (btnName) => (e) => {
    switch (btnName) {
      case 'download': // download visesole app

        break
      case 'renew':
        if (isLicenseActivated) break
        checkStripeQuantity({
          body: { sku_id: 'sku_IXD349CdlbT1bP' },
          success: ({ data }) => {
            const quantity = data.inventory.quantity
            quantity && setCheckoutLoading(true) // will show loader
            quantity && stripeCheckout()
          }
        })
        break
      case 'unbind':
        const { user_id } = currentUser
        unbindLicenseKey({
          body: { user_id },
          success: (res) => {
            history.push('/')
          }
        })
        break
      default:

    }
  }

  return (
    <>
      <Mobile>
        {(authStatus === 'PENDING' || stripeStatus === 'PENDING') && <Loader />}

        <MobileHeader svgLogOut={svgLogOut} linkUrl='/' />

        <MobileLicenseForm
          className='mobile-credit-form-area'
          onLicenseAction={handleLicenseAction}
          initialValue={licenseKey}
          invalid={!isLicenseActivated}
        />
        <div className='mobile-followtwitter-area'>
          <MobileFollowTwitter />
          <img src={svgMobileBottom} className='visesole-images svgMobileBottom' alt='svgMobileBottom' />
          <div className='visesole-svglayer'></div>
        </div>
      </Mobile>

      <Default>
        {(authStatus === 'PENDING' || stripeStatus === 'PENDING') && <Loader />}

        <div className='visesole-license'>
          <img src={svgLicenseBottom} className='visesole-images svgLicenseBottom' alt='svgLicenseBottom' />
          <div className='visesole-svglayer'></div>
          <LicenseForm
            onLicenseAction={handleLicenseAction}
            onHide={handleHide}
            className='visesole-license-form'
            initialValue={licenseKey}
            isLicenseVisible={isLicenseVisible}
            loading={isCheckoutLoading ? 'renew' : 'null'}
          />
          <div className='license-followtwitter'>
            <FollowTwitter />
          </div>
        </div>
        <LicenseHeader isActivated={isLicenseActivated} />
      </Default>
    </>
  )
}

License.propTypes = {
  licenseKey: PropTypes.string,
  checkStripeQuantity: PropTypes.func,
  isLicenseActivated: PropTypes.any,
  unbindLicenseKey: PropTypes.func,
  currentUser: PropTypes.any,
}

const selector = createStructuredSelector({
  licenseKey: licenseKeySelector,
  isLicenseActivated: licenseActivationSelector,
  currentUser: currentUserSelector,
  stripeStatus: stripeStatusSelector,
  authStatus: authStatusSelector,
})

const actions = {
  checkStripeQuantity,
  unbindLicenseKey,
}

export default compose(connect(selector, actions))(License)
