// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
 * uygulamanın hangi firebase projesine
 * bağlı olduğu bilgileri içeren ayar objesi
 */

const firebaseConfig = {
  apiKey: 'AIzaSyCIBu0Xuua6mTwPjgFGDjD3Iv-CCLLPyb0',
  authDomain: 'chatlesh-442f4.firebaseapp.com',
  projectId: 'chatlesh-442f4',
  storageBucket: 'chatlesh-442f4.appspot.com',
  messagingSenderId: '355697548690',
  appId: '1:355697548690:web:dcf3f5440c73e61bbff54b',
};

// Aradaki köprüyü kurma
const app = initializeApp(firebaseConfig);

/*
 * yetkilendirme / storage / veritabanı gibi
 * yapıların kurulum fonksiyonları çağırıp
 * uygulamamaız hakkında bilgiler içerien app
 * objesine göndermemiz
 */
export const auth = getAuth(app);

// google yetkilendirmesi için gerekli kurulum
export const provider = new GoogleAuthProvider();

// firestore'un uyguluma içinde kullanmak için kurlumu
export const db = getFirestore(app);
