import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Input, Button, Container, Icon } from 'semantic-ui-react'
import svgSuccess from 'Assets/Icons/success.svg'
import svgDelete from 'Assets/Icons/danger.svg'
import svgRenewKey from 'Assets/Icons/renew-key.svg'
import svgUnbindKey from 'Assets/Icons/unbind-key.svg'
import * as cx from 'classnames'
import './MobileLicenseForm.scss'

const MobileLicenseForm = ({
  className,
  initialValue,
  onLicenseAction,
  invalid,
}) => {
  const helpTextLicense = `License Key: ${invalid ? 'Unactivated' : 'Activated'}`
  const helpTextBot = `Bot Status:  ${invalid ? 'Offline' : 'Online'}`
  const svgLicenseHelp = svgSuccess

  return (
    <Container className={cx('mobile-credit-form', className)}>
      <Grid
        container
        direction='row'
        justify='center'
      >
        <Grid.Column className='mobile-credit-segment'>
          <Segment className='mobile-credit-text'>
            <div className='mobile-credit-text'>
              Your License Key
            </div>
          </Segment>

          <Segment>
            <Input
              className='mobile-license-input'
              value={initialValue}
              readOnly
            />
            {
              <div className='visesole-center mobile-license-helptext-area'>
                <div className={cx('mobile-license-help', 'key', invalid ? 'help-error' : 'help-success')}>
                  <img src={invalid ? svgDelete : svgLicenseHelp} className='svgLicenseHelp' alt='svgLicenseHelp' />
                  <p>{helpTextLicense}</p>
                </div>

                <div className={cx('mobile-license-help', 'bot', invalid ? 'help-error' : 'help-success')}>
                  <img src={invalid ? svgDelete : svgLicenseHelp} className='svgLicenseHelp' alt='svgLicenseHelp' />
                  <p>{helpTextBot}</p>
                </div>
              </div>
            }
          </Segment>

          <Segment className='mobile-license-btn-area'>
            <Button onClick={onLicenseAction('renew')}>
              <div className='mobile-formbtn-icon-area'>
                <Icon as='img' src={svgRenewKey} />
                <p>Renew Key</p>
              </div>
            </Button>

            <Button onClick={onLicenseAction('unbind')}>
              <div className='mobile-formbtn-icon-area'>
                <Icon as='img' src={svgUnbindKey} />
                <p>Unbind Key</p>
              </div>
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

MobileLicenseForm.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  onLicenseAction: PropTypes.func,
  initialValue: PropTypes.string,
}

export default MobileLicenseForm
