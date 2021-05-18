 import firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'
 import 'firebase/database';
 
 var firebaseConfig = {
    apiKey: "AIzaSyCFZy_Opm1mTtDcL_eG_rpUahz4QhihoZg",
    authDomain: "project1-4f3f3.firebaseapp.com",
    projectId: "project1-4f3f3",
    storageBucket: "project1-4f3f3.appspot.com",
    messagingSenderId: "180090438585",
    appId: "1:180090438585:web:7a105c681d9ca9d1ab6c68",
    measurementId: "G-XM8P0X9VVQ"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp()

  export { projectStorage, projectFirestore, timestamp }
  export default fireDb.database().ref()