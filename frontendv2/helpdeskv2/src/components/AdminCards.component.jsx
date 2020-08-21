import React from 'react';
import { connect } from 'react-redux';


const AdminCards = ({ adminReducer: {tickets, users} }) => (
    
    <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet">
            <div className="mdc-card info-card info-card--success">
                <div className="card-inner">
                    <h5 className="card-title">All Tickets</h5>
                    <h5 className="font-weight-light pb-2 mb-1 border-bottom">{tickets ? tickets.length : null}</h5>
                    {/* <p className="tx-12 text-muted">48% target reached</p> */}
                    <div className="card-icon-wrapper">
                        <i className="material-icons">dvr</i>
                    </div>
                </div>
            </div>
        </div>
        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet">
            <div className="mdc-card info-card info-card--danger">
                <div className="card-inner">
                    <h5 className="card-title">Opened Tickets</h5>
                    <h5 className="font-weight-light pb-2 mb-1 border-bottom">{tickets ? tickets.find(ticket => ticket.status === "OPENED") === undefined ? 0 : tickets.filter(ticket => ticket.status === "OPENED").length : 0}</h5>
                    {/* <p className="tx-12 text-muted">55% target reached</p> */}
                    <div className="card-icon-wrapper">
                        <i className="material-icons">attach_money</i>
                    </div>
                </div>
            </div>
        </div>

        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet">
            <div className="mdc-card info-card info-card--primary">
                <div className="card-inner">
                    <h5 className="card-title">Closed Tickets</h5>
                    <h5 className="font-weight-light pb-2 mb-1 border-bottom">{tickets ? tickets.find(ticket => ticket.status === "CLOSED") === undefined ? 0 : tickets.filter(ticket => ticket.status === "CLOSED").length : null}</h5>
                    {/* <p className="tx-12 text-muted">87% target reached</p> */}
                    <div className="card-icon-wrapper">
                        <i className="material-icons">trending_up</i>
                    </div>
                </div>
            </div>
        </div>
        <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet">
            <div className="mdc-card info-card info-card--info">
                <div className="card-inner">
                    <h5 className="card-title">Users</h5>
                    <h5 className="font-weight-light pb-2 mb-1 border-bottom">{users ? users.length : 0}</h5>
                    {/* <p className="tx-12 text-muted">87% target reached</p> */}
                    <div className="card-icon-wrapper">
                        <i className="material-icons">credit_card</i>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(AdminCards);