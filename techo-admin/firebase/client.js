// // import firebase from "firebase"
// import "firebase/auth"
// import firebase from 'firebase/app';


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDPvvJbWIVQaSQXSvCA-Jbn4eliJyQ6VS4",
//     authDomain: "admin-9e3fd.firebaseapp.com",
//     projectId: "admin-9e3fd",
//     storageBucket: "admin-9e3fd.appspot.com",
//     messagingSenderId: "1038523113416",
//     appId: "1:1038523113416:web:7c091a4f34fd8416612afd",
//     measurementId: "G-5TNGD1H8G8"
//   };

// !firebase.apps.length &&
//     firebase.initializeApp(firebaseConfig)

// const mapUserFromFirebaseAuthToUser = (user) => {
//     console.log(user, "USER MAPEADO")
//     const { email, password } = user
    
//     return {
//         email,
//         password
//     }
// }

// export const onAuthStateChanged = (onchange) => {
//     return firebase
//         .auth()
//         .onAuthStateChanged(user => {
//             const normalizedUser =
//                 mapUserFromFirebaseAuthToUser(user)
//             onchange(normalizedUser)
//         })
// }

// export const loginWithEmail = () => {
//     const emailProvider = new firebase.auth.
//         emailAuthProvider()
//     return firebase
//         .auth()
//         .signInWithPopup(emailProvider)
// }