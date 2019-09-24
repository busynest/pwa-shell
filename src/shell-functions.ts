
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
import { store }                         from './store';
import { setUser, setAuth } from './user-action';

// updateLogin() & setUser() - Login state
export const runFirebase = () => {
  return firebase.auth().onAuthStateChanged( (firebaseUser) => {
    if (firebaseUser) { store.dispatch(setAuth(true));  store.dispatch(setUser(firebaseUser)); }
    else              { store.dispatch(setAuth(false)); store.dispatch(setUser(firebaseUser)); }
  });
};

// setAuth() - Login state
export const authChange = () => {
  return firebase.auth().onAuthStateChanged( (firebaseUser) => {
    if (firebaseUser) { store.dispatch( setAuth(true) )}
    else              { store.dispatch( setAuth(false) )}
  });
}

// User State
export const firebaseUser = () => { return firebase.auth().currentUser || "demo"; };
export const isUser       = () => { return !!firebase.auth().currentUser; };
export const logOut       = () => { return firebase.auth().signOut(); }; /* .then( () => { } ).catch( () => { } ) */

// User Information
export const firebaseID   = () => { return firebase.auth().currentUser.uid  || "demo" ; };
export const profileURL   = () => { return firebase.auth().currentUser.photoURL || '/images/manifest/icon-48x48.png'; }; 
export const userName     = () => { return firebase.auth().currentUser.displayName; };
export const userEmail    = () => { return firebase.auth().currentUser.email; };

// Delete
export const deleteUser   = () => { return firebase.auth().currentUser.delete() }; /* .then( () => { }).catch( () => { }) */
export const deleteDoc    = (collect, item) => { return firestore.collection(collect).doc(item).delete() };
// export const storageRef   = () => { return firebase.storage.ref(); }

export const saveMessage  = (messageText) => {
  return firebase.firestore().collection('feedback')
  .add({
    name:           userName(),
    text:           messageText,
    profilePicUrl:  profileURL(),
    timestamp:      firebase.firestore.FieldValue.serverTimestamp()
  }).catch( (error) => {
    console.error('Error writing message', error);
  });
};

export const saveImage = () => {
    // 1 - We add a message with a loading icon that will get updated with the shared image.
    firebase.firestore().collection('messages').add({
      name:           userName(),
      imageUrl:       LOADING_IMAGE_URL,
      profilePicUrl:  profileURL(),
      timestamp:      firebase.firestore.FieldValue.serverTimestamp()
    }).then( (messageRef) => {
      // 2 - Upload the image to Cloud Storage.
      const filePath = firebase.auth().currentUser.uid + '/' + messageRef.id + '/' + file.name;
      return firebase.storage().ref(filePath).put(file).then( (fileSnapshot) => {
        // 3 - Generate a public URL for the file.
        return fileSnapshot.ref.getDownloadURL().then((url) => {
          // 4 - Update the chat message placeholder with the image’s URL.
          return messageRef.update({
            imageUrl: url,
            storageUri: fileSnapshot.metadata.fullPath
          });
        });
      });
    }).catch( (error) => { console.error('There was an error uploading a file to Cloud Storage:', error); });
};

export const deviceToken = () => {
  // Saves the messaging device token to the datastore.
  firebase.messaging().getToken().then( (currentToken) => {
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);
      // Saving the Device Token to the datastore.
      firebase.firestore().collection('fcmTokens').doc(currentToken)
          .set({uid: firebase.auth().currentUser.uid});
    } else {
      // Need to request permissions to show notifications.
      requestNotificationsPermissions();
    }
  }).catch( (error) => { console.error('Unable to get messaging token.', error); });
};

export const signUp = () => {
  const email = this.shadowRoot.getElementById('txtEmail').value;
  const pass  = this.shadowRoot.getElementById('txtPassword').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (pass.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch( (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });

}

export const anon = () => {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    // [START authanon]
    firebase.auth().signInAnonymously().catch( (error) => {
      // Handle Errors here.
      const errorCode     = error.code;
      const errorMessage  = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
      } else { console.error(error); }
      // [END_EXCLUDE]
    });
    // [END authanon]
}
};

export const google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then( (result) => {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token         = result.credential.accessToken; console.log("Google Token");
    }
    // The signed-in user info.
    const firebaseUser            = result.firebaseUser;
  }).catch( (error) => {
    // Handle Errors here.
    const errorCode       = error.code;
    const errorMessage    = error.message;
    const email           = error.email;
    const credential      = error.credential;
  });
};

// window.onerror = function(message, file, line, col, error){ console.log(arguments); }

/*
// Load Feed
export const loadMessages = () => {
  // Referance Document Query
  const query = firebase.firestore().collection('messages').orderBy('timestamp', 'desc').limit(12);
  // Start listening to the query.
  query.onSnapshot( (snapshot) => {
    snapshot.docChanges().forEach( (change) => {
      if (change.type === 'removed') {
       // deleteMessage(change.doc.id);
      } else {
        var message = change.doc.data();
        console.log(
          change.doc.id,
          message.timestamp,
          message.name,
          message.text,
          message.profileURL,
          message.imageUrl);
      }
    });
  });
};
*/