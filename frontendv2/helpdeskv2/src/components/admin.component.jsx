import React from 'react';
import MainContent from './mainContent.component';
import TopHeader from "./TopHeader.component";
import SideNav from "./sideNav.componet";
import { connect } from 'react-redux';

const AdminPage = ({isAuth}) => {
    return (
        <div className="body-wrapper">

            <SideNav />

            <div className="main-wrapper mdc-drawer-app-content">

                {/* top header navbar */}
                <TopHeader />

                <div className="page-wrapper mdc-toolbar-fixed-adjust">

                    {/* main content wrapper component here */}

                    <MainContent isAuth={isAuth} />
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state ) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getTickets: (data) => { dispatch ({ type: "GET_USER_TICKETS", tickets: data})},
     
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
