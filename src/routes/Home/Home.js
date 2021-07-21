import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import First from 'routes/First'
import Features from 'routes/Features'
import FAQ from 'routes/FAQ'
import { Footer } from 'containers/Footer'
import MobileHome from 'routes/MobileHome'
import AOS from 'aos'
import { updateStripeQuantity, verifyUserPay } from 'redux/modules/stripe/actions'
import { stripeStatusSelector } from 'redux/modules/stripe/selectors'
import { Loader } from 'components/Loader'
import 'aos/dist/aos.css'
import 'animate.css/animate.min.css'
import './Home.scss'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Home = ({ updateStripeQuantity, verifyUserPay, stripeStatus }) => {
  AOS.init()
  const query = new URLSearchParams(window.location.search)

  useEffect(() => {
    const stripeValue = query.get('success')
    stripeValue && updateStripeQuantity()
    stripeValue && verifyUserPay({
      body: { session_id: query.get('id') },
      success: (res) => { }
    })
  }, [window.location.search])

  return (
    <>
      <Mobile>
        {stripeStatus === 'PENDING' && <Loader mobile />}
        <MobileHome />
      </Mobile>

      <Default>
        {stripeStatus === 'PENDING' && <Loader />}
        <First />
        <Features />
        <FAQ />
        <Footer />
      </Default>
    </>
  )
}

Home.propTypes = {
  updateStripeQuantity: PropTypes.func,
  verifyUserPay: PropTypes.func,
  stripeStatus: PropTypes.any,
}

const selector = createStructuredSelector({
  stripeStatus: stripeStatusSelector
})

const actions = {
  updateStripeQuantity,
  verifyUserPay,
}

export default compose(connect(selector, actions))(Home)
