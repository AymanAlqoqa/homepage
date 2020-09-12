import firebase from 'firebase';
import 'firebase/storage';

const app = !firebase.apps.length
  ? firebase.initializeApp({
      projectId: 'fr-ayman-homepage',
      appId: '1:472579658133:web:8b7c3e422e58d9895b269c',
      databaseURL: 'https://fr-ayman-homepage.firebaseio.com',
      storageBucket: 'fr-ayman-homepage.appspot.com',
      locationId: 'us-central',
      apiKey: 'AIzaSyCmCe_7WL0AXJV68H5EwLD9UHkbUPvF7Rc',
      authDomain: 'fr-ayman-homepage.firebaseapp.com',
      messagingSenderId: '472579658133',
    })
  : firebase.app;

export { app };
