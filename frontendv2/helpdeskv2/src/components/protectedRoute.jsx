import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class ProtectedRoute extends React.Component{

  render(){

    const { component: Component, ...rest } = this.props;
    // console.log(this.props.isAuth);
    return (
      <Route {...rest}

        render={

          (props) => (
            this.props.isAuth === true ? <Component {...props} />

              : <Redirect to="/login" />
          )

        } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mapStateToProps)(withRouter(ProtectedRoute));

