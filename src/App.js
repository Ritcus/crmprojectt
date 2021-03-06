import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { MessageHistory } from './message-history/MessageHistory.comp';
import { Dashboard } from './pages/dashboard/Dashboard.page';

import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.Page';

import {TicketLists} from "./pages/ticket-listing/TicketLists.page"
import { Ticket } from './pages/ticket/Ticket.page';

import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

import {BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          
          <Route exact path="/">
            <Entry/>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>

          <PrivateRoute path="/addticket">
            <AddTicket/>
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
          
          
  
      </Switch>
      </Router>
    </div>
  );
}

export default App;
