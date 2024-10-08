import React from 'react';
import Logo from '../../assets/Logo2.svg';
import './navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <img className="menuButton" src={Logo} alt="menu here" />
      </nav>
    </>
  );
};

export default Navbar;
