import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react'
import FormInput from 'components/FormInput'
import { FollowTwitter } from 'components/FollowTwitter'
import * as cx from 'classnames'
import svgLogo from 'Assets/Shapes/logo.svg'
import './CreditForm.scss'

const CreditForm = ({
  className,
  formType,
  invalid,
  onSubmit,
}) => {
  const initialValue = ''
  const helpText = `Your ${formType === 'password' ? 'password': 'license key'} is invalid`
  const inputPlaceholder = `Please enter your ${formType === 'password' ? 'password' : 'license key'}`
  const inputType = formType === 'password' ? 'password' : 'text'
  const inputReadOnly = false
  const buttonText = 'Enter'
  
  return (
    <div className={cx('visesole-center visesole-credit-form', className)}>
      <Grid
        container
        direction='row'
        justify='center'
      >
        <Grid.Column className='credit-segment'>
          <Segment>
            <img src={svgLogo} className='svgLogo' alt='logo' />
            <div className='visesole-svglayer'></div>
          </Segment>

          <Segment>
            <div className='credit-text'>
              {formType === 'license' ? 'Welcome to Vise' : 'Enter Password'}
            </div>
          </Segment>

          <Segment>
            <FormInput
              onClick={onSubmit}
              inputPlaceholder={inputPlaceholder}
              inputType={inputType}
              inputReadOnly={inputReadOnly}
              buttonText={buttonText}
              helpText={invalid && helpText}
              initialValue={initialValue}
            />
          </Segment>

          <Segment>
            <FollowTwitter className='credit-followtwitter' />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

CreditForm.propTypes = {
  className: PropTypes.string,
  formType: PropTypes.string,
  invalid: PropTypes.bool,
  onSubmit: PropTypes.func,
}

export default CreditForm
