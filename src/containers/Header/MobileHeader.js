import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Segment, Container } from 'semantic-ui-react'
import svgLogo from 'Assets/Shapes/logo.svg'
import * as cx from 'classnames'
import './MobileHeader.scss'

const MobileHeader = ({
  className,
  showHeaderText,
  svgLogOut,
  linkUrl,
}) => {
  const LinkUrlstr = linkUrl ? linkUrl : '/'

  return (
    <Container
      className={cx('visesole-mobile-header', className)}
    >
      <Segment >
        <Menu secondary>
          <Menu.Item className='mobile-header-logo'>
            <Link to='/'>
              <div className='mobile-logo'>
                <img src={svgLogo} className='svgLogo' alt='logo' />
                <div className='visesole-svglayer'></div>
              </div>
            </Link>
          </Menu.Item>

          {showHeaderText && <Menu.Item
            className='mobile-header-text'
            name='Dashboard'
          />}

          <Menu.Item className='mobile-header-right-field' position='right'>
          </Menu.Item>

          {svgLogOut && <Menu.Item className='mobile-header-right' position='right'>
            <Link to={LinkUrlstr}>
              <div className='mobile-header-btn'>
                <img src={svgLogOut} className='svgLogOut' alt='svgLogOut' />
                <div className='visesole-svglayer'></div>
              </div>
            </Link>
          </Menu.Item>}
        </Menu>
      </Segment>
    </Container>
  )
}

MobileHeader.propTypes = {
  className: PropTypes.string,
  showHeaderText: PropTypes.bool,
  svgLogOut: PropTypes.any,
  linkUrl: PropTypes.string
}

export default MobileHeader
