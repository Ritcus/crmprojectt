import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { MessageHistory } from './message-history/MessageHistory.comp';
import { Dashboard } from './pages/dashboard/Dashboard.page';

import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.Page';

import {TicketLists} from "./pages/ticket-listing/TicketLists.page"
import { Ticket } from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        { /*<Dashboard />*/ }
        {/* <AddTicket/> */}
        {/* <TicketLists /> */}
        <Ticket />
        
      </DefaultLayout>
      {/* <Entry/> */}
    </div>
  );
}

export default App;
