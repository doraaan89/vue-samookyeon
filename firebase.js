// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
const app = initializeApp(firebaseConfig);
console.log(app);
