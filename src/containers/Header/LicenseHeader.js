import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Segment, Container } from 'semantic-ui-react'
import LinkButton from 'components/LinkButton'
import svgLogo from 'Assets/Shapes/logo.svg'
import svgDelete from 'Assets/Icons/delete.svg'
import svgSuccess from 'Assets/Icons/success.svg'
import * as cx from 'classnames'
import './Header.scss'

const LicenseHeader = ({
  className,
  isActivated,
}) => {

  return (
    <Container
      className={cx('visesole-license-header', className)}
    >
      <Segment >
        <Menu secondary>

          <Menu.Item className='header-logo-item'>
            <Link to='/'>
              <div className='header-logo'>
                <img src={svgLogo} className='svgLogo' alt='logo' />
                <div className='visesole-svglayer'></div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item
            className='header-logo-text'
            name='Dashboard'
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              <div className={`visesole-license-activated ${isActivated ? 'activated' : 'unactivated'}`} >
                {isActivated ?
                  <img src={svgSuccess} className='svgSuccess' alt='svgSuccess' /> :
                  <img src={svgDelete} className='svgDelete' alt='svgDelete' />
                }
                <p>License Key: {isActivated ? 'Activated' : 'Unactivated'}</p>
              </div>
            </Menu.Item>

            <Menu.Item>
              <div className={`visesole-license-activated ${isActivated ? 'activated' : 'unactivated'}`} >
                {isActivated ?
                  <img src={svgSuccess} className='svgSuccess' alt='svgSuccess' /> :
                  <img src={svgDelete} className='svgDelete' alt='svgDelete' />
                }
                <p>Bot Status: {isActivated ? 'Online' : 'Offline'}</p>
              </div>
            </Menu.Item>

            <Menu.Item>
              <LinkButton to='/'>Logout</LinkButton>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    </Container>
  )
}

LicenseHeader.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isActivated: PropTypes.bool,
}

export default LicenseHeader
