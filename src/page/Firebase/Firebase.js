import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyAshIcqiGidCY6N5kTmaMQlc_ZvSS7JMD0",
  authDomain:"doctor-6c56c.firebaseapp.com",
  projectId:"doctor-6c56c",
  storageBucket:"doctor-6c56c.appspot.com",
  messagingSenderId:"1002377865696",
  appId:"1:1002377865696:web:75090e8a3b083de85fa385"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;