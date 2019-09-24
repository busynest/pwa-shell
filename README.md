Application Authentication
======================
![workflow](https://www.inmostfire.com/images/workflow.png) [Demo](https://www.inmostfire.com)

an Application Shell built with Lit-HTML, Redux, Firebase, and Polymer.

![Subscribe](https://www.inmostfire.com/images/settings.png)

PWA-SHWLL includes Firebase's Cloud Firestore, Cloud Storage, and User Management that require Firebase setup to use this component.

| `<pwa-shell>` |
| :-----------: |

## Pollyfills
```html
<script src="./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js" async ></script>
```
## Google & Firebase setup
* Add Google Analytics
* Setup Firebase Project
* Initialize Firebase Authentication - email, anonymous, google
* Initialize Firestore Database
```html
<!-- FIREBASE -->
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-storage.js"></script> 
```
```javascript
// Initialize Firebase
const admin = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxx.firebaseio.com",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx"
};
// REFERENCE TO SERVICES - Global
const application           = firebase.initializeApp(admin);
const firestore             = application.firestore();
const storage               = firebase.storage();
const storageRef            = storage.ref();
```

## Website Setup:
```javascript
import 'pwa-shell';
```
```html
<pwa-shell></pwa-shell>
```

## Properties (in Development)
| Property | Description | Default |
| :------: | :---------: | :------:|
| --drawer-position:   | Static or Still during scrolling fixed / absolute | fixed |

## Command Line Interface Tools
* polymer-cli
* firebase-tools

## Please send Feedback
All feedback, comments, bugs, and requests are welcome.
* [Jack's Publishing](https://www.jackspublishing.com)
* [contractor's centre](https://www.contractorscentre.com)