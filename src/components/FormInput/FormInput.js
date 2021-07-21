import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'
import copy from 'copy-to-clipboard'
import Button from 'components/Button'
import * as cx from 'classnames'
import svgDanger from 'Assets/Icons/danger.svg'
import svgDangerWhite from 'Assets/Icons/danger-white.svg'
import './FormInput.scss'

const FormInput = ({
  className,
  inputPlaceholder,
  inputType,
  inputReadOnly,
  buttonText,
  helpText,
  onClick,
  initialValue,
  isLicenseMode, // for only license form
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isInputHover, setInputHover] = useState(false)

  const onInputClick = () => {
    if (!isLicenseMode) return
    initialValue && setInputValue(initialValue)
    copy(initialValue.slice(0, initialValue.length))
  }
  const onInputKeyDown = (e) => {
    if (e.key === 'Enter') onClick(inputValue)
  }

  return (
    <div >
      <Input
        className={cx('visesole-center', 'visesole-forminput',
          (helpText && !isLicenseMode) && 'input-invalid', className)}
        action={<Button onClick={(e) => onClick(inputValue)}>{buttonText}</Button>}
        placeholder={inputPlaceholder}
        type={inputType}
        value={initialValue ? initialValue : inputValue}
        onKeyDown={onInputKeyDown}
        onChange={(e, { value }) => setInputValue(value)}
        readOnly={inputReadOnly}
        onClick={onInputClick}
        onMouseEnter={() => setInputHover(true)}
        onMouseLeave={() => setInputHover(false)}
      />

      { (helpText && !isLicenseMode) &&
        <div className='visesole-center visesole-forminput-helptext invalid-color'>
          <img src={svgDanger} className='svgDanger' alt='svgDanger' />
          <p className='helptext-invalid-color'>{helpText}</p>
        </div>
      }

      { (isLicenseMode && isInputHover) &&
        <div className='visesole-center visesole-forminput-helptext'>
          <img src={svgDangerWhite} className='svgDanger' alt='svgDanger' />
          <p className='helptext-white-color'>{helpText}</p>
        </div>
      }

    </div>
  )
}

FormInput.propTypes = {
  className: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputType: PropTypes.string,
  inputReadOnly: PropTypes.bool,
  buttonText: PropTypes.string,
  helpText: PropTypes.any,
  onClick: PropTypes.func,
  initialValue: PropTypes.string,
  isLicenseMode: PropTypes.bool,
}

export default FormInput
