var background = chrome.extension.getBackgroundPage();
const {firebase} = background.window;
const bgWindow = background.window;


// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAp66GmiVYlreSgKuO58XuJufAyEdf4pV8",
  authDomain: "jointaptap-70449.firebaseapp.com",
  databaseURL: "https://jointaptap-70449.firebaseio.com",
  projectId: "jointaptap-70449",
  storageBucket: "jointaptap-70449.appspot.com",
  messagingSenderId: "1063331104972",
  appId: "1:1063331104972:web:4d97cb8e4e71c694745a69",
  measurementId: "G-ZPZ61TNK70"
};
function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(!bgWindow.myStore){
      bgWindow.myStore = {};
    }
    if (user) {
      bgWindow.myStore.user = user
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      window.location='popup-home.html';
      document.getElementById('quickstart-button').innerHTML = 'Continue with Google'
    } else {
    }
  });
  document.getElementById('quickstart-button').addEventListener('click', startSignIn, false);
}

function startAuth(interactive) {
  chrome.identity.getAuthToken({interactive: !!interactive}, function(token) {
    if (chrome.runtime.lastError && !interactive) {
      console.log('It was not possible to get a token programmatically.');
    } else if(chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else if (token) {
      var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        if (error.code === 'auth/invalid-credential') {
          chrome.identity.removeCachedAuthToken({token: token}, function() {
            startAuth(interactive);
          });
        }
      });
    } else {
      console.error('The OAuth Token was null');
    }
  });
}

function startSignIn() {

  document.getElementById('quickstart-button').innerHTML = '<div class="loader"><div>'
  document.getElementById('quickstart-button').disabled = true;
  if (firebase.auth().currentUser) {
    // firebase.auth().signOut();
    document.getElementById('quickstart-button').innerHTML = 'Continue with Google'
    console.log('currentuser',firebase.auth().currentUser )
  } else {
    startAuth(true);
  }
}



window.onload = function() {
  initApp();
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {createDiv: {width: "100px", height: "100px", innerHTML: "Hello"}}, function(response) {
  //       console.log(response.confirmation);
  //   });
  // });
  
  // chrome.tabs.executeScript(null, {
  //   file: './contentScript.js', //my content script   }, () => {
  //     connect() //this is where I call my function to establish a connection     });
  // });
};

