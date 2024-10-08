import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import TimerAnalog from './pages/TimerAnalog';
import TimerDigital from './pages/TimerDigital';
import Landing from './pages/landing';
import SetTimer from './pages/setTimer';
import AlarmView from './pages/AlarmView';
import BreakView from './pages/BreakView';
import Layout from './pages/Layout';

const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/setTimer',
    element: <SetTimer />,
  },
  {
    path: '/timerAnalog',
    element: <TimerAnalog />,
  },
  {
    path: '/timerDigital',
    element: <TimerDigital />,
  },
  {
    path: '/alarmView',
    element: <AlarmView />,
  },
  {
    path: '/breakView',
    element: <BreakView />,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// <Route path="/setTimer" element={<SetTimer />} />
//       <Route path="/timerAnalog" element={<TimerAnalog />} />
//       <Route path="/timerDigital" element={<TimerDigital />} />
