import React, { useState } from 'react';


const Register = () => {
    return (
        <div className="body-wrapper">
            <div className="main-wrapper">
                <div className="page-wrapper full-page-wrapper d-flex align-items-center justify-content-center">
                    <main className="auth-page">
                        <div className="mdc-layout-grid">
                            <div className="mdc-layout-grid__inner">
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-6-tablet">
                                    <div className="mdc-card">
                                        <form>
                                            <div className="mdc-layout-grid">
                                                <div className="mdc-layout-grid__inner">
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                                                        <div className="mdc-text-field w-100 mdc-ripple-upgraded" style={{"--mdc-ripple-fg-size":"120px","--mdc-ripple-fg-scale":"1.80208", "--mdc-ripple-fg-translate-start":"37.375px, -38px", "--mdc-ripple-fg-translate-end":"40.6406px, -37.5px"}}>
                                                            <input className="mdc-text-field__input" id="text-field-hero-input" />
                                                            <div className="mdc-line-ripple" style={{"transformOrigin":"97.375px center"}}></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Username</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                                                        <div className="mdc-text-field w-100 mdc-ripple-upgraded" style={{"--mdc-ripple-fg-size":"120px" , "--mdc-ripple-fg-scale":"1.80208","--mdc-ripple-fg-translate-start":"30.0938px, -42px", "--mdc-ripple-fg-translate-end":"40.6406px, -37.5px" }}>
                                                            <input className="mdc-text-field__input" id="text-field-hero-input" />
                                                            <div className="mdc-line-ripple" style={{"transformOrigin":"90.0938px center"}}></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Username</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <div className="mdc-text-field w-100 mdc-ripple-upgraded" style={{"--mdc-ripple-fg-size" :"255px", "--mdc-ripple-fg-scale":"1.72129", "--mdc-ripple-fg-translate-start":"-3.125px, -105.5px"," --mdc-ripple-fg-translate-end" :"85.7813px, -105px" }}>
                                                            <input className="mdc-text-field__input" id="text-field-hero-input" />
                                                            <div className="mdc-line-ripple" style={{"transformOrigin": "124.375px center"}}></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Username</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <div className="mdc-text-field w-100 mdc-ripple-upgraded">
                                                            <input className="mdc-text-field__input" type="password" id="text-field-hero-input" />
                                                            <div className="mdc-line-ripple"></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <input type="checkbox" className="mdc-checkbox__native-control" id="checkbox-1" />
                                                                <div className="mdc-checkbox__background">
                                                                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                                                        <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                                                    </svg>
                                                                    <div className="mdc-checkbox__mixedmark"></div>
                                                                </div>
                                                            </div>
                                                            <label for="checkbox-1">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                                        <a href="#">Forgot Password</a>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <a href="../../index.html" className="mdc-button mdc-button--raised w-100 mdc-ripple-upgraded">
                                                            Register
                          </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}



export default Register;



