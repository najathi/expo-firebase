import * as firebase from 'firebase';
import ENV from '../env';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: ENV().apiKey,
	authDomain: ENV().authDomain,
	databaseURL: ENV().databaseURL,
	projectId: ENV().projectId,
	storageBucket: ENV().storageBucket,
	messagingSenderId: ENV().messagingSenderId,
	appId: ENV().appId,
	measurementId: ENV().measurementId
};


if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;