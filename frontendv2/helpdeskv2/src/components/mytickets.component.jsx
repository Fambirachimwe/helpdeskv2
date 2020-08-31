import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

import socketIOClient from "socket.io-client";
import axios from 'axios';
import { getToken, STATUS } from '../util/util';

import FlipMove from 'react-flip-move';




const endpoint = "http://127.0.0.1:4000";
const socket = socketIOClient(endpoint);




const MyTickets = ({ userReducer : {tickets}, getTickets}) => {

    // emit an event to update the mytickets of the user logged in 
    const config = {
        headers: {
          "X-Auth-Token": getToken()
        }
      }
    useEffect(() => {
        socket.on("update_mytickets_table", () => {
            axios.get("http://127.0.0.1:4000/app/mytickets", config).then(data => {
                    getTickets(data.data.tickets);
            });
        });
    },
    [])

    
    return (
        <div>
        <div className="mdc-card p-0">
            <h6 className="card-title card-padding pb-0">My Tickets</h6>
            <div className="table-responsive">
                <FlipMove>
                <table className="table table-hoverable">
                    <thead>
                        <tr>
                            <th className="text-left">Ticket ID</th>
                            <th className="text-left">Title</th>
                            <th >Prority (g)</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {/* <FlipMove></FlipMove> */}
                        
                        {
                            
                            tickets !== undefined ? (

                            // insert flip move here 

                            // <FlipMove></FlipMove>
                            
                            tickets.map(ticket => (

                                <tr key={ticket._id}>
                                    <td className="text-left"> <Link to={`/${ticket._id}`}>{ticket._id}</Link></td>
                                    <td className="text-left">{ticket.title}</td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.status === STATUS.PENDING ? (<span className="badge badge-warning">{ticket.status}</span>) : (<span className="badge badge-primary">{ticket.status}</span>) }</td>    
                                </tr>
                            ))
                            ) : (null)

                        }

                    </tbody>
                </table>
                </FlipMove>
            </div>
        </div>
    </div>
    )
};


const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      getTickets: (data) => { dispatch ({ type: "USER_GET_USER_TICKETS", tickets: data})},
     
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);