import React from 'react'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

// socket io client 
import socketIOClient from "socket.io-client";
const endpoint = "http://127.0.0.1:4000";
const socket = socketIOClient(endpoint);


const AdminPool = ({ tickets, getTickets }) => {

    socket.on('test', (dt) => {
        console.log(dt)
    });

    socket.on("update_confirm", (dt) => {
        getTickets(dt);  // dipatch the new state to the store
        // console.log('update confirm')
    })

    return (
        <div style={{ marginTop: "20px" }}>
            <div className="mdc-card p-0">
                <h6 className="card-title card-padding pb-0">All Tickets</h6>
                <div className="table-responsive">
                    <table className="table table-hoverable">
                        <thead>
                            <tr>
                                <th className="text-left">Ticket ID</th>
                                <th className="text-left">Title</th>
                                <th >Prority (g)</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets !== undefined ? (
                                    tickets.map(ticket => (

                                        <tr key={ticket._id}>
                                            <td className="text-left"> <Link to={`/${ticket._id}`}>{ticket._id}</Link></td>
                                            <td className="text-left">{ticket.title}</td>
                                            <td>{ticket.priority}</td>
                                            <td><span className="badge badge-warning">{ticket.status}</span></td>
                                            <td><i class="material-icons mdc-text-field__icon">visibility</i></td>
                                        </tr>
                                    ))
                                ) : (null)

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: (data) => { dispatch({ type: "GET_USER_TICKETS", tickets: data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPool);