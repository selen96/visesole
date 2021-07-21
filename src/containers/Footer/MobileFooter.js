import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as cx from 'classnames'

import './MobileFooter.scss'

const MobileFooter = ({ className }) => {

  return (
    <>
      <div className={cx('mobile-footer', className)}>
        <Container className={cx('mobile-footer-container', 'visesole-center', className)}>
          <Grid centered columns={3}>
            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('mobile-footer-item-title', className)}>Information</div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('mobile-footer-item-content', className)}>
                  <Link
                    to='/terms-of-service'
                    className={cx('mobile-footer-item-content', className)}
                  >Terms of Service</Link>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('mobile-footer-item-content', className)}>
                  <a
                    href='https://visesole.com/privacy-policy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('mobile-footer-item-content', className)}
                  >Privacy Policy</a>
                </div>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column rows={3} className='mobile-footer-socials'>
              <Grid.Row>
                <div className={cx('mobile-footer-item-title', className)}>Socials</div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('mobile-footer-item-content', className)}>
                  <a
                    href='https://twitter.com/Visesole'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('mobile-footer-item-content', className)}
                  >Twitter</a>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('mobile-footer-item-content', className)}>
                  <a
                    href='https://youtube.com/c/visesole'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('mobile-footer-item-content', className)}
                  >YouTube</a>
                </div>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column rows={3}>
              <Grid.Row>
                <div className={cx('mobile-footer-item-title', className)}>Contact</div>
              </Grid.Row>
              <Grid.Row>
                <div className={cx('mobile-footer-item-content', className)}>
                  <a
                    href='mailto:info@visesole.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('mobile-footer-item-content', className)}
                  >info@visesole.com</a>
                </div>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      <div className={cx('mobile-footer-brand', className)}>
        <div className='visesole-center'>
          © 2020 ViseSole
        </div>
      </div>
    </>
  )
}
export default MobileFooter
