import React, {useState} from 'react';


const Register = () => {
    return (
        <div class="body-wrapper">
    <div class="main-wrapper">
      <div class="page-wrapper full-page-wrapper d-flex align-items-center justify-content-center">
        <main class="auth-page">
          <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-6-tablet">
                <div class="mdc-card">
                  <form>
                    <div class="mdc-layout-grid">
                      <div class="mdc-layout-grid__inner">
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                          <div class="mdc-text-field w-100 mdc-ripple-upgraded" style="--mdc-ripple-fg-size:120px; --mdc-ripple-fg-scale:1.80208; --mdc-ripple-fg-translate-start:37.375px, -38px; --mdc-ripple-fg-translate-end:40.6406px, -37.5px;">
                            <input class="mdc-text-field__input" id="text-field-hero-input"/>
                            <div class="mdc-line-ripple" style="transform-origin: 97.375px center;"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label">Username</label>
                          </div>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                          <div class="mdc-text-field w-100 mdc-ripple-upgraded" style="--mdc-ripple-fg-size:120px; --mdc-ripple-fg-scale:1.80208; --mdc-ripple-fg-translate-start:30.0938px, -42px; --mdc-ripple-fg-translate-end:40.6406px, -37.5px;">
                            <input class="mdc-text-field__input" id="text-field-hero-input"/>
                            <div class="mdc-line-ripple" style="transform-origin: 90.0938px center;"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label">Username</label>
                          </div>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                          <div class="mdc-text-field w-100 mdc-ripple-upgraded" style="--mdc-ripple-fg-size:255px; --mdc-ripple-fg-scale:1.72129; --mdc-ripple-fg-translate-start:-3.125px, -105.5px; --mdc-ripple-fg-translate-end:85.7813px, -105px;">
                            <input class="mdc-text-field__input" id="text-field-hero-input"/>
                            <div class="mdc-line-ripple" style="transform-origin: 124.375px center;"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label">Username</label>
                          </div>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                          <div class="mdc-text-field w-100 mdc-ripple-upgraded">
                            <input class="mdc-text-field__input" type="password" id="text-field-hero-input"/>
                            <div class="mdc-line-ripple"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label">Password</label>
                          </div>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                          <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                              <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1" />
                              <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                  <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                              </div>
                            </div>
                            <label for="checkbox-1">Remember me</label>
                          </div>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                          <a href="#">Forgot Password</a>
                        </div>
                        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                          <a href="../../index.html" class="mdc-button mdc-button--raised w-100 mdc-ripple-upgraded">
                            Register
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
    )
}