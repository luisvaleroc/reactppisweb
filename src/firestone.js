import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
   
        apiKey: "AIzaSyAqv4zX-reY5inEYjbO_NEOfMBgf_FH9IQ",
        authDomain: "ppis-6becc.firebaseapp.com",
        databaseURL: "https://ppis-6becc.firebaseio.com",
        projectId: "ppis-6becc",
        storageBucket: "ppis-6becc.appspot.com",
        messagingSenderId: "500720133319",
        appId: "1:500720133319:web:eb9afb9a5b0064b4074ae2",
        measurementId: "G-FEDXZ7MM1L"
      
});

let db = firebase.firestore();
db.settings({timestampslnSnapshots: true
});

export default db;