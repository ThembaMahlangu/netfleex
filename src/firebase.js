import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADcxNPpavPr7jmSF7o3ahyPbAVBnOErfo",
    authDomain: "netflix-clone-mzansi-ae495.firebaseapp.com",
    projectId: "netflix-clone-mzansi-ae495",
    storageBucket: "netflix-clone-mzansi-ae495.appspot.com",
    messagingSenderId: "683413291824",
    appId: "1:683413291824:web:d355bf5eadd41b6e97bef5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;