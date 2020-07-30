import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loginPage from './pages/login.pages';
import Register from './pages/register.pages';
import ProtectedRoute from './components/protectedRoute';
import {getToken} from './util/util';

import AppRoute from './components/AppRoute.component';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      clicked: false
    })
  }

  componentDidMount(){
    console.log(getToken())
    if(getToken()){
      this.props.isAuth()  
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
    isAuth: () => {dispatch({type: "LOGGED_IN", isAuth: true})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
