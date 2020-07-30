import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {handleLogOut} from '../util/util';
import {connect} from 'react-redux';


const SideNav = ({history, user}) => (

    <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
        <div className="mdc-drawer__header">
            <Link to="/" className="brand-logo">
                <img src="../../../assets/images/logo.svg" alt="logo" />
            </Link>
        </div>
        <div className="mdc-drawer__content">
            <div className="user-info">
                <p className="name">{user.username}</p>
                <p className="email">{user.email}</p>
            </div>
            <div className="mdc-list-group">
                <nav className="mdc-list mdc-drawer-menu">
                    <div className="mdc-list-item mdc-drawer-item">
                        <NavLink className="mdc-drawer-link" to="/">
                            <i
                                className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                            >
                                home
                      </i>
                      Dashboard
                    </NavLink>
                    </div>
                    <div className="mdc-list-item mdc-drawer-item">
                        <NavLink className="mdc-drawer-link" to="/add">
                            <i
                                className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                aria-hidden="true"
                            >
                                track_changes
                      </i>
                      Add New Ticket
                    </NavLink>
                    </div>
                    <div className="mdc-list-item mdc-drawer-item">
                        <Link
                            className="mdc-expansion-panel-link"
                            to="/"
                            data-toggle="expansionPanel"
                            data-target="ui-sub-menu"
                        >
                            <i
                                className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                                aria-hidden="true"
                            >
                                dashboard
                      </i>
                      Knowledge
                      {/* <i className="mdc-drawer-arrow material-icons">chevron_right</i> */}
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="profile-actions">
                <Link to="#">Settings</Link>
                <span className="divider"></span>
                <Link to="#" onClick={() => {handleLogOut(); history.push('/login')}}>Logout</Link>
            </div>
        </div>
    </aside>

);




const mapStatetoProps = (state) => {
    return {
        ...state
    }
}



export default connect(mapStatetoProps)(withRouter(SideNav));
