import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';

import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
      {/* <Entry/> */}
    </div>
  );
}

export default App;
