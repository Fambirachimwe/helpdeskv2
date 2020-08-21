import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';



const LoginPage = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {

        // console.log(props.isAuth());
        event.preventDefault();
        axios.post('http://127.0.0.1:4000/user/login', { username, password }).then(data => {
            if(data.data) {
                // console.log(data.data.user);

                // dispatch user to the redux state

                const locaStorage = window.localStorage;
                locaStorage.setItem('token', data.data.token);
               
                

                if(data.data.role === 'User'){
                  props.UserIsAuth(data.data.user);  // dispatching action  to redux state a
                    props.history.push('/');
                } else {
                  props.AdminIsAuth(data.data.user);  // dispatching action  to redux state a
                    props.history.push('/admin')
                }
                
            }
    
        });

    }


    return (
        <div >
          <div className="body-wrapper" style={{overflow: "hidden"}}>
            <div className="main-wrapper">
              <div className="page-wrapper full-page-wrapper d-flex align-items-center justify-content-center">
                <main className="auth-page">
                  <div className="mdc-layout-grid">
                    <div className="mdc-layout-grid__inner">
                      <div className="stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                      <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-6-tablet">
                        <div className="mdc-card">
                          <form onSubmit={handleSubmit}>
                            <div className="mdc-layout-grid">
                              <div className="mdc-layout-grid__inner">
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                  <div className="mdc-text-field w-100">
                                    <input className="mdc-text-field__input" id="text-field-hero-input" onChange={handleChangeUsername} value={username} />
                                    <div className="mdc-line-ripple"></div>
                                    <label htmlFor="text-field-hero-input" className="mdc-floating-label">Username</label>
                                  </div>
                                </div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                  <div className="mdc-text-field w-100">
                                    <input className="mdc-text-field__input" value={password} onChange={handleChangePassword} type="password" id="text-field-hero-input" />
                                    <div className="mdc-line-ripple"></div>
                                    <label htmlFor="text-field-hero-input" className="mdc-floating-label">Password</label>
                                  </div>
                                </div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <input type="checkbox"
                                              className="mdc-checkbox__native-control"
                                              id="checkbox-1"/>
                                      <div className="mdc-checkbox__background">
                                        <svg className="mdc-checkbox__checkmark"
                                              viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path"
                                                fill="none"
                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark"></div>
                                      </div>
                                    </div>
                                    <label htmlFor="checkbox-1">Remember me</label>
                                  </div>
                                </div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                  <a href="#">Forgot Password</a>
                                </div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                  <button type="submit" className="mdc-button mdc-button--raised w-100">
                                    Login
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
    )
};




const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      UserIsAuth: (user) => {dispatch({type: "USER_LOGGED_IN", isAuth: true, user: user})},

      AdminIsAuth : (admin) => {dispatch({type: "ADMIN_LOGGED_IN", isAuth: true, user: admin})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));

