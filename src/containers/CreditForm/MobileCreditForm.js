import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment, Input, Button, Container } from 'semantic-ui-react'
import svgDanger from 'Assets/Icons/danger.svg'
import * as cx from 'classnames'
import './MobileCreditForm.scss'

const MobileCreditForm = ({
  className,
  invalid,
  onSubmit,
  formType,
}) => {
  const formTitle = formType === 'dashboard' ? 'Welcome to Vise' : 'Enter Password'
  const helpText = `Your ${formType === 'dashboard' ? 'license key' : 'password'} is invalid`
  const placeholder = `Please enter your ${formType === 'dashboard' ? 'license key' : 'password'}`
  const inputType = formType === 'dashboard' ? 'text' : 'password'

  const [inputValue, setInputValue] = useState('')

  const onInputKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit(inputValue)
  }

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
              {formTitle}
            </div>
          </Segment>

          <Segment className='mobile-form-element-area'>
            <Input
              className='mobile-credit-input'
              placeholder={placeholder}
              type={inputType}
              value={inputValue}
              onKeyDown={onInputKeyDown}
              onChange={(e, { value }) => setInputValue(value)}
            />
            {invalid &&
              <div className='visesole-center mobile-forminput-helptext invalid-color'>
                <img src={svgDanger} className='svgDanger' alt='svgDanger' />
                <p>{helpText}</p>
              </div>
            }
          </Segment>

          <Segment className='mobile-form-element-area'>
            <Button onClick={(e) => onSubmit(inputValue)} className='mobile-formsubmit-btn'>Enter</Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

MobileCreditForm.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  onSubmit: PropTypes.func,
  formType: PropTypes.string,
}

export default MobileCreditForm
