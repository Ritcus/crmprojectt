import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';

import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.Page';

import {TicketLists} from "./pages/ticket-listing/TicketLists.page"

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        { /*<Dashboard />*/ }
        {/* <AddTicket/> */}
        <TicketLists />
      </DefaultLayout>
      {/* <Entry/> */}
    </div>
  );
}

export default App;
