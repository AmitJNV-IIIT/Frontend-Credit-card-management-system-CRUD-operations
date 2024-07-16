import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loginpage from './pages/Loginpage';
import Adminpage from './pages/Adminpage';
import Userhome from './pages/Userhome';
import UserRegistration from './pages/Userregistration';
import Visualizer from './pages/Visualizerpage';
import Alerts from './pages/Alertspage';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([{
  path: '/',
  element: <Loginpage />,
  },
  {
    path: '/arkham',
    element: <Adminpage />,
  },
  {
    path: '/dashboard',
    element: <Userhome />,
  },
  {
    path: '/registeruser',
    element: <UserRegistration />,
  },
  {
    path: '/visualizer',
    element: <Visualizer />,
  },
  {
    path: '/alerts',
    element: <Alerts />,
  },
  {
    path: '/userprofile',
    element: <UserProfile/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
