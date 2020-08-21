import React, { useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { handleLogOut, getToken } from '../util/util';
import { connect } from 'react-redux';
import axios from 'axios';

const styles = {
    "text-decoration": "none",
    "color": "#fff"
}

const SideNav = ({ history, adminReducer: { admin }, userReducer: { user } }) => {

    let USER;

    if (admin) {
        USER = admin;

    } else {
        USER = user;
    }

    return (

        <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
            <div className="mdc-drawer__header">
                <Link to="/" className="brand-logo" style={styles}>
                    <h3>Doves Helpdesk </h3>
                </Link>
            </div>
            <div className="mdc-drawer__content">
                <div className="user-info">

                    <p className="name">{USER ? (USER.username) : (null)}</p>
                    <p className="email">{USER ? (USER.email) : (null)}</p>
                </div>

                <div className="mdc-list-group">

                    <nav className="mdc-list mdc-drawer-menu">

                        {
                            USER ? USER.role === "User" ? (
                                <div>
                                    <div className="mdc-list-item mdc-drawer-item">
                                        <NavLink className="mdc-drawer-link" to="/">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon">home</i>
                                            Dashboard
                                        </NavLink>
                                    </div>

                                    <div className="mdc-list-item mdc-drawer-item">
                                        <NavLink className="mdc-drawer-link" to="/add">
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true" > track_changes</i>
                                            Add Ticket
                                        </NavLink>
                                    </div>

                                    <div className="mdc-list-item mdc-drawer-item">
                                        <Link className="mdc-expansion-panel-link" to="/" data-toggle="expansionPanel" data-target="ui-sub-menu" >
                                            <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true" > dashboard </i>
                                            Knowledge
                                        </Link>
                                    </div>

                                </div>

                            ) : (
                                    <div>
                                        <div className="mdc-list-item mdc-drawer-item">
                                            <NavLink className="mdc-drawer-link" to="/admin">
                                                <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon">home</i>
                                        Dashboard
                                        </NavLink>
                                        </div>

                                        <div className="mdc-list-item mdc-drawer-item">
                                            <NavLink className="mdc-drawer-link" to="/tickets">
                                                <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true" > track_changes</i>
                                                Tickets
                                        </NavLink>
                                        </div>

                                        <div className="mdc-list-item mdc-drawer-item">
                                            <NavLink className="mdc-expansion-panel-link" to="users" data-toggle="expansionPanel" data-target="ui-sub-menu" >
                                                <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">dashboard</i>
                                            Users
                                        </NavLink>
                                        </div>

                                        <div className="mdc-list-item mdc-drawer-item">
                                            <NavLink className="mdc-drawer-link" to="/roles">
                                                <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true" > track_changes</i>
                                            Manage Roles
                                        </NavLink>
                                        </div>

                                        <div className="mdc-list-item mdc-drawer-item">
                                            <NavLink className="mdc-drawer-link" to="/settings">
                                                <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">track_changes</i>
                                            Settings
                                        </NavLink>
                                        </div>

                                    </div>
                                )


                                : (null)}


                        {/* */}
                    </nav>
                </div>



                <div className="profile-actions">
                    <Link to="#">Settings</Link>
                    <span className="divider"></span>
                    <Link to="#" onClick={() => { handleLogOut(); history.push('/login') }}>Logout</Link>
                </div>
            </div>
        </aside>

    );
}


const mapStatetoProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStatetoProps)(withRouter(SideNav));
