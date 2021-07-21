import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Button, Dimmer, Header } from 'semantic-ui-react'
import svgConfetti from 'Assets/Icons/confetti.svg'
import * as cx from 'classnames'
import './Modal.scss'

const VisesoleModal = ({ className, active }) => {
  const [openModal, setOpenModal] = useState(active)

  const history = useHistory()

  return (
    <Dimmer
      className={cx('visesole-modal', className)}
      active={openModal}
      onClickOutside={() => setOpenModal(false)}
      page
    >
      <Header as='div' inverted>
        <div className={cx('visesole-modal-box', className)}>
          <div className={cx('modal-img', className)}>
            <img src={svgConfetti} className='svgConfetti' alt='svgConfetti' />
            <div className='visesole-svglayer'></div>
          </div>

          <div className='modal-title'>Congratulations!</div>
          <div className='modal-content'>You will receive an email with your license key shortly</div>
          <Button onClick={() => {
            setOpenModal(false)
            history.push('/')
          }} className='modal-ok-btn'>OK</Button>
        </div>
      </Header>
    </Dimmer>
  )
}

VisesoleModal.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
}

export default VisesoleModal
