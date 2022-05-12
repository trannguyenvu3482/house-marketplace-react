// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjtgO9JxVSZ7jKUf1NDjDbcGqDbu8Mtp0',
  authDomain: 'house-marketplace-app-45c84.firebaseapp.com',
  projectId: 'house-marketplace-app-45c84',
  storageBucket: 'house-marketplace-app-45c84.appspot.com',
  messagingSenderId: '1068222400997',
  appId: '1:1068222400997:web:a3d1544302d52bd397870c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
