import React from 'react'
import PropTypes from 'prop-types'

import * as cx from 'classnames'
import './QuestionCard.scss'

const QuestionCard = ({
  className,
  title,
  content,
  ...props
}) => {
  return (
    <div className={cx('visesole-question-card', className)} {...props}>
      <div className={cx('question-card-title', className)}>{title}</div>
      <div className={cx('question-card-content', className)}>{content}</div>
    </div>
  )
}

QuestionCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}

export default QuestionCard
