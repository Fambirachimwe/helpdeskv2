import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


const actionButonContainer = {
    "display": "inline-block",
    "justifyContent": "space-betweer",
    "padding": "10px",
    "width": "100%"
}

const AdminTicketDetail = ({ tickets }) => {


    return (
        <div>
            <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                <div class="mdc-card">

                    <div class="d-flex justify-content-between">
                        <h4 class="card-title mb-0">{tickets.title}</h4>
                        <div className="action-buttons"  style={{actionButonContainer}}>

                            <Button size="small" variant="contained">Elevate</Button>
                            <Button size="small" variant="contained" color="primary">Unresolved</Button>
                            <Button size="small" variant="contained" color="secondary">Close</Button>
                            <hr/>

                        </div>
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


