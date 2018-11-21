import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCSOnK-Cy_IerTk989f8L8Mu9uHMB2ufZI",
    authDomain: "rapi-front.firebaseapp.com",
    databaseURL: "https://rapi-front.firebaseio.com",
    projectId: "rapi-front",
    storageBucket: "rapi-front.appspot.com",
    messagingSenderId: "725927857998"
};


export default firebase.initializeApp(config);

