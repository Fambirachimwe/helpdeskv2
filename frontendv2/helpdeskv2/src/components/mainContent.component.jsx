import React from 'react';
// import ProtectedRoute from './protectedRoute';
import {Route, Switch,BrowserRouter } from 'react-router-dom';
import MyTickets from './mytickets.component';
import AddTicket from "./AddTicket.component";
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';



const MainContent = ({user}) => (
    <main className="content-wrapper">
        
        <Switch>
            

            {
                user ? user.role === "User" ? ( 
                    <Route exact path="/:id" component={TicketDetail} />,
                    <Route exact path='/' component={MyTickets} />,
                    <Route exact path='/add' component={AddTicket} /> 
                 ) : null : null
            }
            
            
            
        </Switch>
       
           
    </main>
);

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(MainContent);


