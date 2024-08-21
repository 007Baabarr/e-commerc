import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore  ,
   setDoc ,
   doc ,
   addDoc ,
   getDoc ,
   getDocs ,
   deleteDoc ,
   collection ,
   query ,
   where ,
   updateDoc 
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage ,
   ref ,
   uploadBytes ,
   getDownloadURL 
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
import { getAuth , 
   onAuthStateChanged , 
   createUserWithEmailAndPassword ,
   signInWithEmailAndPassword ,
   signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

   const firebaseConfig = {
      apiKey: "AIzaSyDbAm5K3m1v6pY8PZTKlolvj2NeYmUCqkU",
      authDomain: "my-first-project-40f4c.firebaseapp.com",
      projectId: "my-first-project-40f4c",
      storageBucket: "my-first-project-40f4c.appspot.com",
      messagingSenderId: "347554215628",
      appId: "1:347554215628:web:bfed829dd2b60131c6f469",
      measurementId: "G-T890F6C7RD"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app)
const db = getFirestore(app)




export{
   onAuthStateChanged ,
   auth ,
   createUserWithEmailAndPassword ,
   signInWithEmailAndPassword ,
   signOut ,
   getStorage ,
   storage , 
   ref ,
   uploadBytes ,
   getDownloadURL ,
   db ,
   setDoc ,
   doc ,
   getDoc ,
   getDocs ,
   collection ,
   addDoc ,
   deleteDoc ,
   query ,
   where ,
   updateDoc 
}