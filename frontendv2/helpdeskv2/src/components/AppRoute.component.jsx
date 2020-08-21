import React from 'react';
import SideNav from './sideNav.componet';
import TopHeader from './TopHeader.component';
import MainContent from './mainContent.component';
import { connect } from 'react-redux';
import axios from 'axios';
import {getToken} from '../util/util'



class AppRoute extends React.Component {

    componentDidMount() {
        const config = {
            headers: {
              "X-Auth-Token": getToken()
            }
          }
      
          // getting tickets of the logged in user 
        axios.get("http://127.0.0.1:4000/app/mytickets", config).then(data => {
            this.props.getTickets(data.data.tickets);
        });
    }

    render() {

        const { isAuth, click, handleClick } = this.props;
        return (
            <div className="body-wrapper">

                <SideNav />

                <div className="main-wrapper mdc-drawer-app-content">

                    {/* top header navbar */}
                    <TopHeader click={click} handleClick={handleClick} />

                    <div className="page-wrapper mdc-toolbar-fixed-adjust">

                        {/* main content wrapper component here */}

                        <MainContent isAuth={isAuth} />


                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getTickets: (data) => { dispatch ({ type: "USER_GET_USER_TICKETS", tickets: data})},
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);