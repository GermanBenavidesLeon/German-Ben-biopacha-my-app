import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAQkYkt4pq0ylNhWkecNmQpPBHaKJZGYhQ",
    authDomain: "biopachaecommerce.firebaseapp.com",
    projectId: "biopachaecommerce",
    storageBucket: "biopachaecommerce.appspot.com",
    messagingSenderId: "771317269016",
    appId: "1:771317269016:web:24d6686597fa4a149bb96d"
  };

  const app = initializeApp(firebaseConfig);

  export function getFirestore() {
      return firebase.firestore(app)
  }