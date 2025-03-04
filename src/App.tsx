import React from 'react';
import { Outlet } from 'react-router-dom';
import CardsProvider from './app/context/cards-context/CardsContext';
import Layout from './app/layouts/Layout';
import { AppProviders } from './app/provider/AppProviders';

function App() {
  return (
    <div className="app">
      <Layout />

      <AppProviders>
        <Outlet />
      </AppProviders>
    </div>
  );
}

export default App;
