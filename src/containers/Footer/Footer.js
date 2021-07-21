import React from 'react'
import svgFooterWavebottom from 'Assets/Shapes/Home/homepage-wave-bottom.svg'
import { Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import svgLogo from 'Assets/Shapes/logo.svg'
import * as cx from 'classnames'

import './Footer.scss'

const Footer = ({ className }) => {
  return (
    <div className={cx('visesole-footer', className)}>
      <>
        <img src={svgFooterWavebottom} className='visesole-images svgFooterWavebottom' alt='svgFooterWavebottom' />
        <div className='visesole-svglayer'></div>
      </>

      <div className={cx('footer-content', className)}>
        <Container className={cx('footer-container', className)}>
          <Grid columns='4' centered>
            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('footer-logo', className)}>
                  <img src={svgLogo} className='svgLogo' alt='logo' />
                  <div className='visesole-svglayer'></div>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('footer-logo', className)}>
                  <p>© 2020 ViseSole</p>
                </div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('footer-item-title', className)}>Information</div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('footer-item-content', className)}>
                  <Link
                    to='/terms-of-service'
                    className={cx('footer-item-content', className)}
                  >Terms of Service</Link>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('footer-item-content', className)}>
                  <Link
                    to='/privacy-policy'
                    className={cx('footer-item-content', className)}
                  >Privacy Policy</Link>
                </div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('footer-item-title', className)}>Socials</div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('footer-item-content', className)}>
                  <a
                    href='https://twitter.com/Visesole'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('footer-item-content', className)}
                  >Twitter</a>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('footer-item-content', className)}>
                  <a
                    href='https://youtube.com/c/visesole'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('footer-item-content', className)}
                  >YouTube</a>
                </div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('footer-item-title', className)}>Contact</div>
              </Grid.Row>
              <Grid.Row>
                <a
                  href='mailto:info@visesole.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cx('footer-item-content', className)}
                >info@visesole.com</a>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </div >
  )
}
export default Footer
