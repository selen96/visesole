import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as cx from 'classnames'
import './LinkButton.scss'

const LinkButton = ({ className, ...props }) => {
  return (
    <Link className={cx('ui button visesole-long-btn', className)} {...props} >
      {props.children}
    </Link>
  )
}

LinkButton.propTypes = {
  className: PropTypes.string,
}

export default LinkButton
