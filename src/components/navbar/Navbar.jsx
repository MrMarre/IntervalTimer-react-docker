import React from 'react';
import Logo from '../../assets/Logo2.svg';
import './navbar.scss';

const Navbar = ({ onMenuClick }) => {
  return (
    <>
      <nav className="nav">
        <img
          className="menuButton"
          src={Logo}
          alt="menu here"
          onClick={onMenuClick}
        />
      </nav>
    </>
  );
};

export default Navbar;
