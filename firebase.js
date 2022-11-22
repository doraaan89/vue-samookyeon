// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBql0qnnrYGjdUn0Kocmt1NxbCRCOJeCkc',
	authDomain: 'vue-samookyeon-efb7f.firebaseapp.com',
	projectId: 'vue-samookyeon-efb7f',
	storageBucket: 'vue-samookyeon-efb7f.appspot.com',
	messagingSenderId: '531079899290',
	appId: '1:531079899290:web:0ce4f265bfba9c97581723',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
