import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loginPage from './pages/login.pages';
import Register from './pages/register.pages';
import ProtectedRoute from './components/protectedRoute';
import {getToken} from './util/util';
import axios from "axios";
import AdminPage from './components/admin.component'

import AppRoute from './components/AppRoute.component';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      clicked: false
    })
  }

  componentDidMount(){
    
    // const endpoint = "http://127.0.0.1:4000";

    // const socket = socketIOClient(endpoint);

    

    const token = getToken();
    if(getToken()){
       
      const DecodeJWT= (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };
      // console.log(DecodeJWT(token))  // decodec the token
      axios.post("http://127.0.0.1:4000/user/verify", {id: DecodeJWT(token).id}).then(data => {
        // here dispatch user object here
        // this.props.isAuth(user); 
        // console.log(data.data.user[0])
        this.props.isAuth(data.data.user[0]);
      }) 
    }
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path="/login" component={loginPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={AdminPage} />
            
            {/* app rout to be a protected component */}

            {
              getToken() ? (
                
                  <Route path='/'>
                    <AppRoute click={this.state.clicked} handleClick={this.handleClick} /> 
                  </Route>
               
                ) : (
                  <Redirect to="/login" />
                )
              }

            
            
          </Switch>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuth: (user) => {dispatch({type: "LOGGED_IN", isAuth: true, user: user})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
