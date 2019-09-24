
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

// @ts-check

import { css } from 'lit-element';

export const shellDesign = css`

      /* DISPLAY READY STATE */
      main          { display:           block; margin: 10px; } /* background-color: #2b3c44; */
      .page[active] { display:           block; }
      .page         {
        display:                          none; 
        background-color:                 rgba(255,255,255, 0.9);
        border-radius: 8px;
        max-width: 600px;
      }

      .x-font {
        font-family:              Roboto, Arial, sans-serif; /* 'Montserrat' */
        line-height:              1.1;
        letter-spacing:           .007em;
        font-size:                14px;
        font-weight:              500;
        text-align:               center;
        text-decoration-style:    solid;
        text-transform:           uppercase;
      }

      /** DRAWER START */
      button:focus {outline:0;}

.drawer-list {
  background-color:         rgba(0,0,0,.4); /* #2b3c44 */
  box-sizing:               border-box;
  /*border:                 4px solid black;
  border-radius:            20px;*/
  width:                    100%;
  height:                   100%;
  overflow:                 auto;
  list-style-type:          none;
  padding:                  0px;
  margin:                   0px;
  margin-top:               64px;
  font-size: 1.3em;
}

.leaveButton {
  fill: red !important;
}

/* DRAWER */
.navButton {
  display:                  block;
  fill:                     lightgrey;
  color:                    var(--app-black-color);
  background-color:         transparent;
  border:                   0;
  width:                    100%;
  height:                   64px;
  margin:                   auto;
  padding:                  0px;
  font-weight:              800;
  font-size:                .7em;
  /* box-shadow:               0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/
}

.navButton > p {
  margin: 0;
}

.navButton > svg {
  width:                    24px;
  height:                   24px;
}

.navButton:hover {
  /* color:                    #6cc04a;
  fill:                     #6cc04a; */
  background-color:         rgba(0,0,0,.1);
}

.drawer-list > li > a {
  width:                    100%;
  height:                   64px;
  display:                  block;
  text-decoration:          none;
  margin:                   auto;
}

/** HEADER START */


app-header {
  background-color:       #2b3c44;/* var(--app-header-background-color)*/
  position:                fixed;
  text-align:              center;
  height:                  48px;
  border-radius:            0 0 8px 8px;
  box-shadow:              0px 0px 1em 0px rgba(0, 0, 0, 1);
  /* border-bottom:          1px solid #eee; */
  /* background-image:       linear-gradient( #272931, #333641); */
}

.title-box {
  width:100%;
  height: 48px;
}

.main-title {
  line-height:            48px;
  margin:                 0px;
  word-wrap:              break-word;
  text-align:             center;
  font-size:              .8em;
  text-transform:         capitalize;
  font-family:            'Baloo Bhaijaan';
  text-decoration:        none;
  color:                  #fff ;/**var(--app-header-text-color) */

  /* padding-right:      44px;   font-family:            'Pacifico';
   In the narrow layout, the toolbar is offset by the width of the drawer button,
   and the text looks not centered. Add a padding to match that button */
}

/* TOOLBAR TOP */

.toolbar-top {
  height: 48px;

  display: grid;
  grid-template-columns:  36px  1fr 36px;

}

.toolbar-top > button:hover {
  color:                  gold;
  fill:                   gold;
  background-color:       rgba(0,0,0,0.1);
}

/* MENU BUTTON */
.menu-btn {
  display:grid;
  grid-template-columns: 40px 1fr;
  background:             none;
  border:                 none;
  fill:                   var(--app-header-text-color);
  cursor:                 pointer;
  height:                 100%;
  width:                  100%;
}

.menu-btn > img {
  margin: auto;
}

.headLeft {
  margin-right: 10px;
 }
 
 .headRight {
  margin-left: 10px;
 }

/* TOOLBAR STRIP
.toolbar-strip {
  display:                grid;
  grid-template-columns:  1fr 56px;
  /* font-family:            'Baloo Bhaijaan'; */
  font-size:              .8em;
}

.toolbar-strip > a {
  display:                inline-block;
  text-decoration:        none;
  text-align:             center;
  color:                  var(--app-white-color);
  /* line-height:            36px; */
  padding:                6px;
}

.toolbar-strip > a[selected] {
  color:                  lightblue;
  /* border-bottom:          4px solid var(--app-header-selected-color); */
}

.toolbar-strip > a:hover {
  color:                  var(--app-header-selected-color);
  /* border-bottom:          4px solid var(--app-header-selected-color); */
}

.toolbar-strip > h3 {
  margin: 0px;
  margin-bottom: 4px;
}

.userImage {
  border: 2px solid #303030;
  border-radius: 50%;
}

/** FOOTER START */

footer {
  /* background-color: rgba(0,0,0,.1);  #2b3c44 */
  height: 100%;
  width: 100%;
  color: var(--app-white-color);
  text-align: center;
  font-size: .8em;
  font-style: italic;
  padding-bottom: 25px;
}

footer > ul {
  list-style-type: none;
  padding: 0;
  margin: 25px;
}

footer > ul > li > p,
.business{
  margin: 0;
}

.about {
  text-decoration: none;
  color: var(--app-white-color);
}

.link {
  color: white;
  text-decoration: none;
}

.business {
  text-decoration: underline;
}

`;

// export const settings               = html\`<svg viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>\`;
// export const close                  = html\`<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>\`;
// export const faceIcon               = html\`<svg viewBox="0 0 24 24" height="32px" width="32px"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></svg>\`;

