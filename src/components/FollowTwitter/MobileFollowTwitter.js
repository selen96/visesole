import React from 'react'
import PropTypes from 'prop-types'
import * as cx from 'classnames'
import './FollowTwitter.scss'
import svgFollowTwitter from 'Assets/Icons/twitter-fill.svg'

const MobileFollowTwitter = ({ className, ...props }) => {
  return (
    <a href='https://twitter.com/Visesole' target='_blank' rel='noopener noreferrer'>
      <div className={cx('visesole-center', 'mobile-followtwitter', className)}>
        <img src={svgFollowTwitter} className='svgFollowTwitter' alt='followTwitter' />
        <div className='visesole-svglayer'></div>
        <p >Follow us on Twitter</p>
      </div>
    </a>
  )
}

MobileFollowTwitter.propTypes = {
  className: PropTypes.string,
}

export default MobileFollowTwitter
