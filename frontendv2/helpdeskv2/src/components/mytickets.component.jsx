import React from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

const MyTickets = ({tickets}) => (
    <div>
        <div className="mdc-card p-0">
            <h6 className="card-title card-padding pb-0">My Tickets</h6>
            <div className="table-responsive">
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
                        {
                            tickets !== undefined ? (
                            tickets.map(ticket => (

                                <tr key={ticket._id}>
                                    <td className="text-left"> <Link to={`/${ticket._id}`}>{ticket._id}</Link></td>
                                    <td className="text-left">{ticket.title}</td>
                                    <td>{ticket.priority}</td>
                                    <td><span className="badge badge-warning">{ticket.status}</span></td>    
                                </tr>
                            ))
                            ) : (null)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(MyTickets);