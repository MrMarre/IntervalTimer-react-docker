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
import SetTimer from './pages/SetTimer';
import AlarmView from './pages/AlarmView';
import BreakView from './pages/BreakView';
import Layout from './pages/Layout';
import VisualTimer from './pages/VisualTimer';
import TextTimer from './pages/TextTimer';
import CirclesTimer from './pages/CirclesTimer';

function isProduction() {
  console.log(import.meta.env);

  if (import.meta.env.PROD) return { basename: import.meta.env.BASE_URL };
  else return {};
}

export const routes =
  ([
    {
      path: '/setTimer',
      element: <SetTimer />,
      label: 'Set Timer',
    },
    {
      path: '/timerAnalog',
      element: <TimerAnalog />,
      label: 'Analog Timer',
    },
    {
      path: '/timerDigital',
      element: <TimerDigital />,
      label: 'Digital Timer',
    },
    {
      path: '/visualTimer',
      element: <VisualTimer />,
      label: 'Visual Timer',
    },
    {
      path: '/textTimer',
      element: <TextTimer />,
      label: 'Text Timer',
    },
    {
      path: '/circlesTimer',
      element: <CirclesTimer />,
      label: 'Circles Timer',
    },
  ],
  isProduction());

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
