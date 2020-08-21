import React from 'react';
import MainContent from './mainContent.component';
import TopHeader from "./TopHeader.component";
import SideNav from "./sideNav.componet";
import { connect } from 'react-redux';
import axios from 'axios';
import  { getToken } from "../util/util";

class AdminPage extends React.Component {
    
    componentDidMount(){

        if(getToken()){
            const config = {
                headers: {
                  "X-Auth-Token": getToken()
                }
            }
            
            axios.get("http://127.0.0.1:4000/app/tickets", config).then(data => {
                this.props.getAllTickets(data.data.tickets);
            });

            axios.get("http://127.0.0.1:4000/user/users", config ).then(data => {
                this.props.getUsers(data.data.users)
            });
    
        }  
    }

    

    render() {
        const { isAuth } = this.props;
        return (
            <div className="body-wrapper">

                <SideNav />

                <div className="main-wrapper mdc-drawer-app-content">

                    {/* top header navbar */}
                    <TopHeader />

                    <div className="page-wrapper mdc-toolbar-fixed-adjust">

                        {/* main content wrapper component here */}

                        <MainContent isAuth={isAuth}  />

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
        getAllTickets: (data) => { dispatch({ type: "ADMIN_GET_All_TICKETS", tickets: data }) },
        getUsers: (data) => {dispatch({type: "ADMIN_GET_USERS", users:data  })}

    }
}





export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
