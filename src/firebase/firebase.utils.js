import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyDo7kFhVIY-YJoouleB3C1wfPz8-vB4i_E",
  
    authDomain: "crwn-db-44580.firebaseapp.com",
  
    projectId: "crwn-db-44580",
  
    storageBucket: "crwn-db-44580.appspot.com",
  
    messagingSenderId: "1012876934046",
  
    appId: "1:1012876934046:web:6095b5b1a60ec46da5748f",
  
    measurementId: "G-R1YWMWRWYL"
  
  };
   
  export const  createUserProfileDocument = async(userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot =  await userRef.get();

if(!snapShot.exists) {
    const {displayName,email} = userAuth;
    const  createdAt = new Date();

    try {
await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
})
    } catch (error) {
console.log('error creating user', error.message);

    }

}
return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
