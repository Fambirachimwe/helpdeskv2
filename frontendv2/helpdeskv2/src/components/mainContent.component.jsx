import React from 'react';
// import ProtectedRoute from './protectedRoute';
import { Route, Switch, Link } from 'react-router-dom';
import MyTickets from './mytickets.component';
import AddTicket from "./AddTicket.component";
import TicketDetail from './TicketDetail';
import AdminTicketDetail from './AdminTicketDetail.component';
import { connect } from 'react-redux';
import AdminPool from './AdminPool.component';
import AdminCards from "./AdminCards.component";



const MainContent = ({ adminReducer : {admin}, userReducer: {user} }) =>{

    let USER;

    if(admin){
        USER = admin;
        
    } else {
        USER = user;
        
    }
    
    return (
    <main className="content-wrapper">

        {
            USER ? USER.role === "User" ? (
                <Switch>
                    <Route exact path='/' component={MyTickets} />
                    <Route exact path='/add' component={AddTicket} />
                    <Route exact path="/:id" component={TicketDetail} />

                </Switch>
            ) : (
                    <Switch>
                        <div className="mdc-layout-grid">
                            

                            {/* admins cards here */}

                            <Route  exact path="/admin" component={AdminCards} />

                            {/* Pool of all tickets  */}

                            {/* render admin pool here */}    
                            <Route exact path="/admin" component={AdminPool} />
                            <Route exact path="/admin/:id" component={AdminTicketDetail} />
                            

                            {/* <AdminPool /> */}
                        </div>

                    </Switch>



                                      
            
                 ) : null
        }

    </main>
    )
};

const mapStateToProps = (state) => {
    return {
            ...state
    }
}

export default connect(mapStateToProps)(MainContent);


