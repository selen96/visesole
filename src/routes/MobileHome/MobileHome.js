import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Button from 'components/Button'
import { Container, Grid } from 'semantic-ui-react'
import QuestionCard from 'components/QuestionCard'
import FeaturesCard from 'components/FeaturesCard'
import { MobileHeader } from 'containers/Header'
import svgConClose from 'Assets/Icons/mobile-dashboard.svg'
import svgMSoftware from 'Assets/Shapes/Home/dashboard-software.png'
import svgMCircle from 'Assets/Shapes/Password/passwordpage-circle.svg'
import svgMDotPattern from 'Assets/Shapes/dot-pattern.svg'
import svgMFullCircle from 'Assets/Shapes/Home/homepage-full-circle.svg'
import svgMTopCircle from 'Assets/Shapes/Home/mobile-first-circle-top.svg'
import svgMBottomCircle from 'Assets/Shapes/Home/mobile-first-circle-bottom.svg'
import svgMobFooterWavebottom from 'Assets/Shapes/Home/mobile-footer-wave.svg'
import pngBook from 'Assets/Icons/book.png'
import pngGraphic from 'Assets/Icons/graphic_1-1.png'
import pngHand from 'Assets/Icons/hand.png'
import pngLightning from 'Assets/Icons/lightning.png'
import pngNotification from 'Assets/Icons/notifications.png'
import pngRocket from 'Assets/Icons/rocket.png'
import { MobileFooter } from 'containers/Footer'
import Modal from 'components/Modal'
import { stripeCheckout } from 'stripe'
import { stripeQuantitySelector } from 'redux/modules/stripe/selectors'
import 'aos/dist/aos.css'
import './MobileHome.scss'

const MobileHome = ({ stripeQuantity }) => {
  const [checkoutFlag, setCheckout] = useState(false)

  const query = new URLSearchParams(window.location.search)

  const handleCheckOut = (e) => {
    stripeQuantity && setCheckout(true)
    stripeQuantity && stripeCheckout()
  }

  return (
    <>
      <div className='mobile-first' id='first'>
        <div>
          <img src={svgMCircle} className='visesole-images svgMCircle' alt='svgMCircle' />
          <img src={svgMTopCircle} className='visesole-images svgMTopCircle' alt='svgMTopCircle' />
          <img src={svgMBottomCircle} className='visesole-images svgMBottomCircle' alt='svgMBottomCircle' />
          <img src={svgMDotPattern} className='visesole-images svgMDotPattern' alt='svgMDotPattern' />
          <div className='visesole-svglayer'></div>
        </div>

        <MobileHeader svgLogOut={svgConClose} linkUrl='/dashboard' />

        <Container className='mobile-section-container'>
          <div className='mobile-first-textarea'>
            <div className='mobile-text-huge text-animation'>
              <div data-aos='fade-up' data-aos-duration='450'>Increase Your</div>
            </div>

            <div className='mobile-text-huge text-animation'>
              <div data-aos='fade-up' data-aos-duration='500'>Ws With Vise</div>
            </div>

            <div className='mobile-text-light' data-aos='fade-up' data-aos-duration='1000'>
              <div >Automatically enter Nike Draws to increase</div>
              <div >your chances in winning the ability to</div>
              <div >purchase exclusive limited sneakers.</div>
            </div>
          </div>

          <div className='mobile-first-btn-area' data-aos='fade-up' data-aos-duration='1500'>
        
            <Button
              loading={checkoutFlag}
              className='mobile-first-btn visesole-center'
              onTouchStart={handleCheckOut}
            >
              {stripeQuantity ? 'Purchase' : 'Sold Out'}
            </Button>
          </div>

          <div className='mobile-first-softarea'>
            <img src={svgMSoftware} className='svgHSoftware' alt='svgMSoftware' />
            <div className='visesole-svglayer'></div>
          </div>

        </Container>
      </div>

      <div className='mobile-features' id='features'>
        <div>
          <img src={svgMFullCircle} className='visesole-images svgMFullCircle-feature' alt='svgMFullCircle' />
          <div className='visesole-svglayer'></div>
        </div>

        <Container className='mobile-section-container'>
          <div className='mobile-features-textarea'>
            <div className='mobile-text-big text-animation'>
              <div data-aos='fade-up' data-aos-duration='500'>Powerful Features</div>
            </div>

            <div className='mobile-text-light' data-aos='fade-up' data-aos-duration='1000'>
              <div>We have dedicated countless hours to ensure you</div>
              <div>the most powerful features. Vise makes entering</div>
              <div>Nike SNKRS Draws incredibly easy for you.</div>
            </div>
          </div>

          <div className='mobile-features-contents'>
            <Grid className='mobile-features-grid' centered columns={6} >
              <Grid.Row data-aos='fade-up' data-aos-duration='500'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngGraphic}
                  title='Analytics'
                  content='Keep track of your Nike SNKRS wins and losses with our 
                          analytics feature. View your lifetime or daily statistics.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='500'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngBook}
                  title='Calendar'
                  content='Get an instant overview of the latest Nike SNKRS 
                        releases without ever opening your web browser again.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='750'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngLightning}
                  title='Unlimited Tasks'
                  content='Create an infinite amount of tasks to enter 
                        countless SNKRS accounts.
                        There are no limitations with Vise.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='750'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngRocket}
                  title='Amazing Design'
                  content='Our intuitive and beautiful designed software makes 
                          it simple to navigate so you enter draws without difficulty.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='1000'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngNotification}
                  title='Notifications'
                  content='Get notified about your latest successful 
                          purchases and view them together at one place.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='1000'>
                <FeaturesCard
                  className='mobile-features-card'
                  img={pngHand}
                  title='Great Support'
                  content='Vise offers all users 1 on 1 support 
                        in our support Discord Server.
                        Join the community and have fun.'
                />
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>

      <div className='mobile-faq' id='faq'>
        <div>
          <img src={svgMobFooterWavebottom} className='visesole-images 
                  svgMobFooterWavebottom-faq' alt='svgMobFooterWavebottom' />
          <div className='visesole-svglayer'></div>
        </div>

        <Container className='mobile-section-container'>
          <div className='mobile-faq-textarea'>
            <div className='mobile-text-big text-animation'>
              <div data-aos='fade-up' data-aos-duration='500'>Frequently Asked Questions</div>
            </div>

            <div className='mobile-text-light' data-aos='fade-up' data-aos-duration='1000'>
              <div>So that you can get the most out of Vise.</div>
            </div>
          </div>

          <div className='mobile-faq-contents'>
            <Grid className='mobile-faq-grid' centered columns={6} data-aos='fade-up' data-aos-duration='500'>
              <Grid.Row data-aos='fade-up' data-aos-duration='500'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='How much does Vise cost?'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. '
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='500'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='Does Vise work on my PC?'
                  content='Vise supports Windows, MacOS and Linux. Nearly 
                        any computer will be able to run Vise.'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='750'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='How can I get a copy?'
                  content='Announcements about restocks will be random 
                        and always posted beforehand on Twitter. 
                        Make sure to follow us so you don’t miss out! - @ViseSole'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='750'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='Is my country supported?'
                  content='Vise is currently supporting the following countries: 
                        AT, NL, UK, USA, BE, DE, '
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='1000'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='Do you offer groupbuys?'
                  content='Yes, we currently do offer groupbuys for your cook group. 
                        Please contact us at - info@visesole.com'
                />
              </Grid.Row>

              <Grid.Row data-aos='fade-up' data-aos-duration='1000'>
                <QuestionCard
                  className='mobile-faq-card'
                  title='Do you have questions?'
                  content='We are here to help you and answer your questions.
                        You can ask your question on Twitter - @ViseSole'
                />
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>

      <Modal className='mobile-modal' active={query.get('success') ? true : false} />
      <MobileFooter />
    </>
  )
}

MobileHome.propTypes = {
  stripeQuantity: PropTypes.any,
}

const selector = createStructuredSelector({
  stripeQuantity: stripeQuantitySelector
})


export default compose(connect(selector, null))(MobileHome)
