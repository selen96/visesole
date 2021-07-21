import React from 'react'
import PropTypes from 'prop-types'

import * as cx from 'classnames'
import './FeaturesCard.scss'

const FeaturesCard = ({
  className,
  img,
  title,
  content,
  ...props
}) => {
  return (
    <div className={cx('visesole-features-card', className)} {...props}>
      <div className={cx('features-card-img', className)}>
        <img src={img} className={cx('card-img', 'visesole-center', className)} alt='card-img' />
        <div className='visesole-svglayer'></div>
      </div>
      <div className={cx('features-card-text', className)}>
        <div className={cx('features-card-title', className)}>{title}</div>
        <div className={cx('features-card-content', className)}>{content}</div>
      </div>
    </div>
  )
}

FeaturesCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
}

export default FeaturesCard
