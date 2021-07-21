import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import { Menu, Segment, Container } from "semantic-ui-react";
import LinkButton from "components/LinkButton";
import svgLogo from "Assets/Shapes/logo.svg";
import * as cx from "classnames";
import "./Header.scss";

const Header = ({ className, onClick, isActivated }) => {
  return (
    <Container className={cx("visesole-license-header", className)}>
      <Segment>
        <Menu secondary>
          <Menu.Item className="header-logo-item">
            <Link to="/">
              <div className="header-logo">
                <img src={svgLogo} className="svgLogo" alt="logo" />
                <div className="visesole-svglayer"></div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Menu className="visesole-header-rightmenu" position="right">
            <Menu.Item className="underline-links">
              <Link to="#features">Features</Link>
            </Menu.Item>

            <Menu.Item className="underline-links">
              <Link to="#faq">FAQ</Link>
            </Menu.Item>
            <Menu.Item className="header-dashboard-btn">
              <LinkButton to="/dashboard">Dashboard</LinkButton>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    </Container>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isActivated: PropTypes.bool,
};

export default Header;
