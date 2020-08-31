import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {STATUS, getToken} from "../util/util"
// socket io client 
import socketIOClient from "socket.io-client";
import axios from 'axios';
import FlipMove from 'react-flip-move';


const endpoint = "http://127.0.0.1:4000";
const socket = socketIOClient(endpoint);



const AdminPool = ({ adminReducer: {tickets}, getTickets, history, updateState }) => {


    const visibilityClick = (ticketId) => {
        const ticket = tickets.find(ticket => ticket._id === ticketId);
        if(ticket.status === STATUS.PENDING){
            const token = getToken();
            const config = {
                headers: {
                  "X-Auth-Token": token
                }
              }
            // send an api request to the backend to update the ticket status in the database
            axios.put("http://127.0.0.1:4000/app/tickets", {id: ticketId}).then(data => {
                // console.log(data)
                socket.emit("update", token);

                
            });

        } 
        
        history.push(`/admin/${ticketId}`);
        
        
    }


    // socket.on('test', (dt) => {
    //     console.log(dt)
    // });

    socket.on("update_confirm", (dt) => {
        getTickets(dt);  // dipatch the new state to the store
        updateState(dt);
        // console.log('update confirm')
    })

    return (
        <div style={{ marginTop: "20px" }}>
            <div className="mdc-card p-0">
                <h6 className="card-title card-padding pb-0">All Tickets</h6>
                <div className="table-responsive">

                    <FlipMove>
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
                                            <td className="text-left"> <Link to={`/admin/${ticket._id}`}>{ticket._id}</Link></td>
                                            <td className="text-left">{ticket.title}</td>
                                            <td>{ticket.priority}</td>
                                            <td>{ticket.status === STATUS.PENDING ? (<span className="badge badge-warning">{ticket.status}</span>) : (<span className="badge badge-primary">{ticket.status}</span>) }</td>
                                            <td onClick={() => visibilityClick(ticket._id)}><i className="material-icons mdc-text-field__icon" >visibility</i></td>
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
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: (data) => { dispatch({ type: "ADMIN_GET_ALL_TICKETS", tickets: data }) },
        updateState : (data) => {dispatch ({type: "ADMIN_UPDATE_STATE", ticket: data})}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminPool));