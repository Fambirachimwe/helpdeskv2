import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { handleLogOut} from '../util/util'


const Pstyles = {

    // "display": "none",
    "transition": ".4s",
    "position": "absolute",
    "left": "-100%",
    "transform": "translate(-50%)",
    // "float": "left",
    "top": "46px",
    "maxHeight": "700px"

};

const listStyles = {
    "left": "100px"
}


const PopUp = ({click, history}) => {
    

    return (

        (
            click ? (
                <div className="mdc-menu mdc-menu-surface mdc-menu-surface--open " id="toogle" tabIndex="-1" style={Pstyles}>
            <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" style={listStyles}>
                <li className="mdc-list-item" role="menuitem" tabIndex="-1" >
                    <div className="item-thumbnail item-thumbnail-icon-only">
                        <i className="mdi mdi-lock-outline text-primary"></i>
                    </div>
                    <div className="item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="item-subject font-weight-normal">Lock screen</h6>
                    </div>
                </li>
                <li className="mdc-list-item" role="menuitem" tabIndex="-1">
                    <div className="item-thumbnail item-thumbnail-icon-only">
                        <i className="mdi mdi-logout-variant text-primary"></i>
                    </div>
                    <div className="item-content d-flex align-items-start flex-column justify-content-center" onClick={() => {handleLogOut();
                            history.push('/login')
                        }}>
                        <h6 className="item-subject font-weight-normal"><Link to="/login">Logout</Link></h6>
                    </div>
                </li>
            </ul>
        </div>
            ) : (null)
        )
        
    )

};

export default withRouter(PopUp);