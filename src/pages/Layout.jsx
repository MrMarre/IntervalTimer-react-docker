import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Overlay from '../components/overlay/Overlay';
import { routes } from '../App';

const Layout = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible((prevState) => !prevState);
  };

  const links = routes.map((route) => ({
    path: route.path,
    label: route.label,
  }));

  return (
    <>
      <Navbar onMenuClick={toggleOverlay} />
      <Outlet />
      <Overlay
        isVisible={isOverlayVisible}
        onClose={toggleOverlay}
        links={links}
      />
    </>
  );
};

export default Layout;
