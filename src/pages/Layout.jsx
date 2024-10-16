import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Overlay from '../components/overlay/Overlay';
import { routes } from '../App';
import AlarmView from '../components/overlay/AlarmView';

// Vill du trigga overlay på samma sätt, eller ev modifiera din hook att lämna ett begripligt objekt du kan använda när timern når 00:00?

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
      <AlarmView />
    </>
  );
};

export default Layout;
