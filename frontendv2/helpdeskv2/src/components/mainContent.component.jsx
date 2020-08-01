import React from 'react';
// import ProtectedRoute from './protectedRoute';
import {Route, Switch,BrowserRouter } from 'react-router-dom';
import MyTickets from './mytickets.component';
import AddTicket from "./AddTicket.component";
import {TicketDetail} from './TicketDetail';



const MainContent = () => (
    <main className="content-wrapper">
        
        <Switch>
            <Route exact path="/:id" component={TicketDetail} />
            <Route exact path='/' component={MyTickets} />
            <Route exact path='/add' component={AddTicket} />
        </Switch>
       
           
    </main>
);


export default MainContent;

