import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBHiu_abjkpOQWN2oqWTE2GJXRnQvqxwDw",
  authDomain: "curso-3c009.firebaseapp.com",
  projectId: "curso-3c009",
  storageBucket: "curso-3c009.appspot.com",
  messagingSenderId: "1029506262685",
  appId: "1:1029506262685:web:04241d6442914095161674",
  measurementId: "G-HG00MM7MBS"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const db =getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)
  export{db, auth};
