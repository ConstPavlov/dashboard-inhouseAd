import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/app.scss';
import { RouterProvider } from 'react-router';
import { router } from './app/router/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router} />);
