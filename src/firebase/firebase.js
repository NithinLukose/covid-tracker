import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCqZYJ2ykA0h_HYG3d7evzKcuK4PIveC94",
  authDomain: "covid-19-tracker-nithin.firebaseapp.com",
  databaseURL: "https://covid-19-tracker-nithin.firebaseio.com",
  projectId: "covid-19-tracker-nithin",
  storageBucket: "covid-19-tracker-nithin.appspot.com",
  messagingSenderId: "491462750153",
  appId: "1:491462750153:web:57d10c45c104ef97494218",
  measurementId: "G-1VFX3XV8H7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}