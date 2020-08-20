import React from 'react';
import { connect } from 'react-redux';



const AdminTicketDetail = () => (
    <div>
        the admin ticket page 
    </div>
);

const mapStateToProps = (state, ownProps) => {
    const ticketId = ownProps.match.params.id;
    return {
        ...state,
        tickets: state.tickets.find(ticket => ticket._id === ticketId)
    }
}


export default connect(mapStateToProps)(AdminTicketDetail);


