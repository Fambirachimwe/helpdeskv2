import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from "axios";
import './adminTicket.css';
import Attachment from './Attachment';
import { STATUS, getToken } from '../util/util';

import socketIOClient from "socket.io-client";
const endpoint = "http://127.0.0.1:4000";
const socket = socketIOClient(endpoint);

const actionButonContainer = {
    "display": "inline-block",
    "justifyContent": "space-betweer",
    "padding": "10px",
    "width": "100%"
}

const token = getToken();

// const reAssign = (ticketId) => {


// }

// const unResolve = () => {

// }


const closeFunction = (ticketId, status=STATUS.CLOSED) => {
    axios.put("http://127.0.0.1:4000/app/ticket", {id: ticketId, status: status}).then(data => {
        // console.log(data)
        socket.emit("update", token);
    });
}



const AdminTicketDetail = ({ tickets }) => {


    return (
        <div>
            <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                <div class="mdc-card">

                    <div class="d-flex justify-content-between">
                        <h4 class="card-title mb-0">{tickets.title}</h4>
                        <div className="action-buttons"  style={{actionButonContainer}}>

                            <Button size="small"  variant="contained">Reassign</Button>
                            {/* <Button size="small"  variant="contained" color="primary">Unresolved</Button> */}
                            <Button size="small" onClick={() => {closeFunction(tickets._id)}} variant="contained" color="secondary">Close</Button>
                            <hr/>

                        </div>

                    </div>

                    
                    
                    <div className="admin__info">
                        <div className="description">
                            <p>{tickets.description}</p>
                        </div>

                        <div className="attachments">
                           

                            <Attachment image={tickets.attachment} />

                        </div>

                        {
                            tickets.status === STATUS.PENDING ? 
                            (<span className="badge badge-warning">{tickets.status}</span>) :
                             (<span className="badge badge-primary">{tickets.status}</span>) 
                        }

                    </div>
                      

                    


                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const ticketId = ownProps.match.params.id;
    return {
        ...state.adminReducer,
        tickets: state.adminReducer.tickets.find(ticket => ticket._id === ticketId)
    }
}


export default connect(mapStateToProps)(AdminTicketDetail);


