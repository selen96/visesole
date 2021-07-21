import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import * as cx from 'classnames'
import './Button.scss'

const VisesoleButton = ({ className, onClick, ...props }) => {
  return (
    <Button onClick={onClick} className={cx('visesole-btn', className)} {...props} >
      {props.children}
    </Button>
  )
}

VisesoleButton.propTypes = {
  className: PropTypes.string,
  onClick:PropTypes.func,
}

export default VisesoleButton
