import React from 'react';
import PopUp from './popup.component';
import {connect} from 'react-redux';




const TopHeader = ({click, handleClick, adminReducer : {admin}, userReducer: {user}}) => {

    let USER;

    if(admin){
        USER = admin;
        
    } else {
        USER = user;
        
    }

    return (
    <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
            <div className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button sidebar-toggler">
                    menu
                      </button>
            <span className="mdc-top-app-bar__title">Greetings {USER ? (USER.username) : (null)}!</span>
                <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon search-text-field d-none d-md-flex">
                    <i className="material-icons mdc-text-field__icon">search</i>
                    <input
                        className="mdc-text-field__input"
                        id="text-field-hero-input"
                    />
                    <div className="mdc-notched-outline">
                        <div className="mdc-notched-outline__leading"></div>
                        <div className="mdc-notched-outline__notch">
                            <label
                                htmlFor="text-field-hero-input"
                                className="mdc-floating-label"
                            >
                                Search..
                        </label>
                        </div>
                        <div className="mdc-notched-outline__trailing"></div>
                    </div>
                </div>
            </div>
            <div className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-top-app-bar__section-right">
                <div className="menu-button-container menu-profile d-none d-md-block">
                    <button className="mdc-button mdc-menu-button">
                        <span className="d-flex align-items-center">
                            <span className="figure">
                                <img
                                    src="../../../assets/images/faces/face1.jpg"
                                    alt="user"
                                    className="user"
                                />
                            </span>
                    <span className="user-name">{user ? (user.username) : (null)}</span>
                        </span>
                    </button>
                    <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                        <ul
                            className="mdc-list"
                            role="menu"
                            aria-hidden="true"
                            aria-orientation="vertical"
                        >
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon-only">
                                    <i className="mdi mdi-account-edit-outline text-primary"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Edit profile
                            </h6>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon-only">
                                    <i className="mdi mdi-settings-outline text-primary"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Logout
                            </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="divider d-none d-md-block"></div>
                <div className="menu-button-container d-none d-md-block">
                    <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-settings"></i>
                    </button>
                    <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                        <ul
                            className="mdc-list"
                            role="menu"
                            aria-hidden="true"
                            aria-orientation="vertical"
                        >
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon-only">
                                    <i className="mdi mdi-alert-circle-outline text-primary"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Settings
                            </h6>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon-only">
                                    <i className="mdi mdi-progress-download text-primary"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Update
                            </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-button-container">
                    <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-bell"></i>
                    </button>
                    <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                        <h6 className="title">
                            {" "}
                            <i className="mdi mdi-bell-outline mr-2 tx-16"></i>{" "}
                        Notifications
                      </h6>
                        <ul
                            className="mdc-list"
                            role="menu"
                            aria-hidden="true"
                            aria-orientation="vertical"
                        >
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon">
                                    <i className="mdi mdi-email-outline"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        You received a new message
                            </h6>
                                    <small className="text-muted"> 6 min ago </small>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon">
                                    <i className="mdi mdi-account-outline"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        New user registered
                            </h6>
                                    <small className="text-muted"> 15 min ago </small>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon">
                                    <i className="mdi mdi-alert-circle-outline"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        System Alert
                            </h6>
                                    <small className="text-muted"> 2 days ago </small>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail item-thumbnail-icon">
                                    <i className="mdi mdi-update"></i>
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        You have a new update
                            </h6>
                                    <small className="text-muted"> 3 days ago </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-button-container">
                    <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-email"></i>
                        <span className="count-indicator">
                            <span className="count">3</span>
                        </span>
                    </button>
                    <div className="mdc-menu mdc-menu-surface" tabIndex="-1">
                        <h6 className="title">
                            <i className="mdi mdi-email-outline mr-2 tx-16"></i>{" "}
                        Messages
                      </h6>
                        <ul
                            className="mdc-list"
                            role="menu"
                            aria-hidden="true"
                            aria-orientation="vertical"
                        >
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail">
                                    <img
                                        src="../../../assets/images/faces/face4.jpg"
                                        alt="user"
                                    />
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Mark send you a message
                            </h6>
                                    <small className="text-muted"> 1 Minutes ago </small>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail">
                                    <img
                                        src="../../../assets/images/faces/face2.jpg"
                                        alt="user"
                                    />
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Cregh send you a message
                            </h6>
                                    <small className="text-muted"> 15 Minutes ago </small>
                                </div>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                                <div className="item-thumbnail">
                                    <img
                                        src="../../../assets/images/faces/face3.jpg"
                                        alt="user"
                                    />
                                </div>
                                <div className="item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="item-subject font-weight-normal">
                                        Profile picture updated
                            </h6>
                                    <small className="text-muted"> 18 Minutes ago </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-button-container d-none d-md-block">


                    <button className="mdc-button mdc-menu-button" onClick={handleClick} >
                        <i className="mdi mdi-arrow-down-bold-box"></i>
                    </button>

                    {/* pop up menu here  */}
                    {/* styles={this.state.clicked ? {"display": "block"} : {"display": "none"}} */}

                    <PopUp click={click} />


                </div>
            </div>
        </div>
    </header>
    )
};

const mapStateToProps = (state)  => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(TopHeader);

