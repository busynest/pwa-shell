/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

//@ts-check

// LIBRARY ELEMENTS
import { html, LitElement, css, customElement, property }        from 'lit-element';
import { setPassiveTouchGestures }     from '@polymer/polymer/lib/utils/settings';
import { store, RootState }             from './store';

// POLYMER ELEMENTS
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';

// WEBSITE APPLICATION HELPERS
import { connect }                    from 'pwa-helpers/connect-mixin';
import { installRouter }              from 'pwa-helpers/router';
import { installOfflineWatcher }      from 'pwa-helpers/network';
// import { installMediaQueryWatcher }   from 'pwa-helpers/media-query';
// import { updateMetadata }             from 'pwa-helpers//metadata';

// REDUX
import { }                            from './shell-action';

// CSS STYLES
import { shellDesign }                  from './design';

// SVG ICONS
import './snacks/snack-bar';
import 'submit-content';
import 'pwa-auth';

// import 'pwa-auth';
// import { runFirebase } from 'app-elements/user-functions';
// import './snacks/location';
// import {installGeo}                   from './app-elements/website-application';
// import                                     '../components/pages/projects';
// import { openSign, setScreen }        from '../user/user-account';

@customElement('user-icon')
export class ApplicationShell extends connect(store)(LitElement) {

  @property({type:        String})
  private appTitle          = '';
  @property({type:        String})
  private _page             = '';

  @property({type:        Boolean})
  private _offlineNote      = false;
  @property({type:        Boolean})
  private _offlineTxt       = false;

  constructor() {
    super();
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  protected firstUpdated() {
     // ROUTER
    installRouter( (location)         => store.dispatch(navigate(decodeURIComponent(location.pathname))) );
  
    // OFFLINE
    installOfflineWatcher( (offline)  => store.dispatch(updateOffline(offline)));
  }
  
  stateChanged(state: RootState) {
    this._page            = state.app.page;
    this._offlineNote     = state.app.snackbarOpened;
    this._offlineTxt      = state.app.offline;
  }  


  static get styles() {
    return [
      shellDesign,
      css`
      :host {
        display:                        block;
        box-sizing:                     border-box;
        --app-drawer-width:             250px;
        --app-white-color:              #e8e8e8;
        --app-black-color:              #303030;
        --app-green:                    #2b3c44;
        --action-green:                 #6cc04a;
        --app-header-background-color:  var(--app-white-color); /* #333641 #272931 #1e1e1e #212D40 #ce8612 Gold #34495E Blue */
        --app-header-text-color:        var(--app-black-color); /* #fff */
        --app-header-selected-color:    blue;
      }
      
      /** DISPLAY SWITCHES */
      .spec[on]     { display:           block; }
      .spec         { display:           none; }
      .visible[on]  { visibility:        visible; }
      .visible      { visibility:        hidden; }

      /* Wide layout: when the viewport width is bigger than 480px, layout changes to a wide layout. */
      @media (min-width: 480px) {
        /** h2 { font-size: 36px; } */
        .main-title { font-size:  1em; }
      }
        `
    ]}
  
  protected render() {
    return html`

    <!-- APPLICATION HEADER LAYOUT -->
    <app-header-layout
      fullbleed>

    <!-- APPLICATION HEADER -->
    <app-header
      id="head"
      class="main-header"
      slot="header"
      fixed
      condenses>

      <!-- TOOLBAR -->
      <app-toolbar class="toolbar-top">

      <!-- LOGO / HOME PAGE -->
        <a class="menu-btn" ?selected="${ this._page === 'construction' }" href="/construction" tabindex="0"><img src="/images/logo_small.png"/></a>

        <!-- TITLE / PROJECT PAGE -->
        <div class="title-box">
          <a class="main-title" ?selected="${ this._page === 'project management' }" href="/project management">${ this._page }</a>
        </div>

        <!-- LOG IN -->
        <user-icon></user-icon>

      </app-toolbar>

    </app-header>
    
    <!-- USER DRAWER -->
    <user-drawer></user-drawer>

    <!-- PAGES -->
    <main id="main">
     <slot name="main"></slot>
    </main>

    <!-- FOOTER -->
    <footer>
      ${this.appTitle}
      <slot name="footer"></slot>
    </footer>

    <!-- Website Components -->
    <content-button></content-button>
    <content-drawer></content-drawer>
    <snack-bar              ?active="${ this._offlineNote }">You are now ${ this._offlineTxt ? 'offline' : 'online' }.</snack-bar>
    <!-- <user-location ?active="\${ this._geo }"><button>Location</button></user-location>-->

  </app-header-layout>

    `;
  }
}