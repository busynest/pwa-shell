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
import { LitElement, html, css }      from 'lit-element';
import '../pwa-shell';

class AppShell extends LitElement {

  constructor() {
    super();
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

    static get styles() {
      return [
        css`
        :host {
          display:                        block;
        }
  
        /* DISPLAY READY STATE */
        main          { display:           block; margin: 10px; background-color: #fff; }
        .page         {
          background-color:                rgba(255,255,255, 0.9);
          border-radius:                   8px;
          max-width:                       600px;
        }
  
        /* Wide layout: when the viewport width is bigger than 480px, layout changes to a wide layout. */
        @media (min-width: 480px) {
          /** h2 { font-size: 36px; } */
          .main-title { font-size:  1em; }
        }
  
        `
      ];
    }

  render() {
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

        <!-- TITLE / PROJECT PAGE -->
        <a class="main-title">pwa-auth</a>

        <!-- LOG IN -->
        <user-icon></user-icon>

    </app-header>

    <!-- PAGES -->
    <main id="main">
      <user-drawer></user-drawer>
      <user-settings></user-settings>
    </main>

    <!-- FOOTER -->
    <footer>
      <ul>
        <li><h3 class="business">©inmostFire</h3></li>
        <li><p class="slogan">"Innovation"</p></li>
        <li><p><a class="link" href="https://www.jackspublishing.com">about us</a></p></li>
      </ul>
    </footer>

  </app-header-layout>

    `;
  }
}

window.customElements.define('app-shell', AppShell);