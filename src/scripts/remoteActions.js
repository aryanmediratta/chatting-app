
import firebase from 'firebase';

import appStore from '../store/appStore';
	
export function signIn(){
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
	signInHelper()
	})
}
	export function signInHelper(){	
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then((result)=> {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user)
    // ...
}).catch((error)=> {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
	}


	export function signOut(){
		firebase.auth().signOut().then(()=>{
  console.log('signed out')
}).catch((error)=> {
	console.log(error)
});
	}


export function setListenerOnAuthChange(){
	firebase.auth().onAuthStateChanged((user)=> {
  	if (user) {
  		appStore.setUser(user)
  	} 
  	else {
  		appStore.unsetUser
  	}	
	});
}
