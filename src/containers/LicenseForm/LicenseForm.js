import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Button, Icon } from 'semantic-ui-react'
import FormInput from 'components/FormInput'
import svgRenewKey from 'Assets/Icons/renew-key.svg'
import svgDownload from 'Assets/Icons/software-download.svg'
import svgUnbindKey from 'Assets/Icons/unbind-key.svg'
import * as cx from 'classnames'
import './LicenseForm.scss'

const LicenseForm = ({
  className,
  onHide,
  initialValue,
  onLicenseAction,
  isLicenseVisible,
  loading,
}) => {
  const helpText = 'Click to copy your license key.'
  const inputType = isLicenseVisible ? 'text' : 'password'
  const inputReadOnly = true
  const buttonText = isLicenseVisible ? 'Hide' : 'Show'

  return (
    <div className={cx('visesole-center', className)}>
      <Grid
        container
        direction='row'
        justify='center'
      >
        <Grid.Column className='license-segment'>
          <Segment>
            <div className='license-text'>
              Your License Key
            </div>
          </Segment>

          <Segment>
            <FormInput
              className='visesole-license-input'
              onClick={onHide}
              inputType={inputType}
              inputReadOnly={inputReadOnly}
              buttonText={buttonText}
              helpText={helpText}
              initialValue={initialValue}
              isLicenseMode
            />
          </Segment >

          <Segment className='license-form'>
            <Button onClick={onLicenseAction('download')} >
              <div className='formbtn-icon-area'>
                <Icon as='img' src={svgDownload} />
                <p>Download</p>
              </div>
            </Button>

            <Button
              loading={loading === 'renew' ? true : false}
              onClick={onLicenseAction('renew')}
            >
              {
                loading !== 'renew'
                  ?
                  <div className='formbtn-icon-area'>
                    <Icon as='img' src={svgRenewKey} />
                    <p>Renew Key</p>
                  </div>
                  :
                  <></>
              }
            </Button>

            <Button
              loading={loading === 'unbind' ? true : false}
              onClick={onLicenseAction('unbind')}
            >
              <div className='formbtn-icon-area'>
                <Icon as='img' src={svgUnbindKey} />
                <p>Unbind Key</p>
              </div>
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

LicenseForm.propTypes = {
  className: PropTypes.string,
  isLicenseVisible: PropTypes.bool,
  onHide: PropTypes.func,
  onLicenseAction: PropTypes.func,
  initialValue: PropTypes.string,
  loading: PropTypes.string,
}

export default LicenseForm
