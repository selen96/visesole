import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Header } from 'containers/Header'
import { Container } from 'semantic-ui-react'
import Button from 'components/Button'
import Modal from 'components/Modal'
import { stripeCheckout } from 'stripe'
import svgHCircle from 'Assets/Shapes/Home/homepage-circle.svg'
import svgHCircleRight from 'Assets/Shapes/Home/homepage-circle-right.svg'
import svgHCircleTop from 'Assets/Shapes/Home/homepage-circle-top.svg'
import svgHX from 'Assets/Shapes/Home/homepage-x.svg'
import svgHFilledX from 'Assets/Shapes/Home/homepage-filled-x.svg'
import svgHLines from 'Assets/Shapes/Home/homepage-lines.svg'
import svgHSoftware from 'Assets/Shapes/Home/dashboard-software.png'
import svgHDotPattern from 'Assets/Shapes/dot-pattern.svg'
import Tilt from 'react-tilt'
import { stripeQuantitySelector } from 'redux/modules/stripe/selectors'
import './First.scss'

const First = ({ stripeQuantity }) => {
  const [isCheckoutLoading, setCheckoutLoading] = useState(false)
  
  const query = new URLSearchParams(window.location.search)

  return (
    <div className='visesole-first' id='first'>
      <div>
        <img src={svgHCircle} className='visesole-images svgHCircle' alt='svgHCircle' />
        <img src={svgHCircleRight} className='visesole-images svgHCircleRight' alt='svgHCircleRight' />
        <img src={svgHCircleTop} className='visesole-images svgHCircleTop' alt='svgHCircleTop' />
        <img src={svgHFilledX} className='visesole-images svgHFilledX' alt='svgHFilledX' />
        <img src={svgHLines} className='visesole-images svgHLines' alt='svgHLines' />
        <img src={svgHX} className='visesole-images svgHX' alt='svgHX' />
        <img src={svgHDotPattern} className='visesole-images svgHDotPattern' alt='svgHDotPattern' />
        <div className='visesole-svglayer'></div>
      </div>

      <Header />

      <Container className='first-container '>
        <div className='first-textarea'>
          <div className='first-textarea-splite'>
            <div className='text-huge text-animation'>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-easing='ease-out-cubic'
              >Increase Your</div>
            </div>

            <div className='text-huge text-animation'>
              <div
                data-aos='fade-up'
                data-aos-delay='500'
                data-aos-duration='1000'
                data-aos-easing='ease-out-cubic'
              >Ws With Vise</div>
            </div>

            <div className='first-text-light' data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000'>
              <div>Automatically enter Nike SNKRS Draws to increase your chances</div>
              <div>in winning the ability to purchase exclusive limited sneakers.</div>
            </div>
          </div>

          <div className='visesole-purchase-btn' data-aos='fade-up' data-aos-delay='1500' data-aos-duration='1000'>
            <Button
              loading={isCheckoutLoading}
              className='visesole-long-btn'
              onClick={(e) => {
                stripeQuantity && setCheckoutLoading(true)
                stripeQuantity && stripeCheckout()
              }}
            >
              {stripeQuantity ? 'Purchase' : 'Sold Out'}
            </Button>
          </div>
        </div>

        <div className='first-softarea'>
          <div className='first-software-box'>
            <Tilt className='Tilt-svgSoftware'>
              <img src={svgHSoftware} className='svgHSoftware' alt='svgHSoftware' />
            </Tilt>
          </div>
        </div>
      </Container>
      <Modal active={query.get('success') ? true : false} />
    </div>
  )
}

First.propTypes = {
  stripeQuantity: PropTypes.any,
}

const selector = createStructuredSelector({
  stripeQuantity: stripeQuantitySelector
})

export default compose(connect(selector, null))(First)
