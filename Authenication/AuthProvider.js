// import React, { createContext, useState } from 'react';
// import auth from '@react-native-firebase/auth';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setuser] = useState(null);

//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 setuser,
//                 Login: async (email, password) => {
//                     try {
//                         await auth().signInWithEmailAndPassword(email, password)
//                     } catch (e) {
//                         console.log('error ==>', e)
//                     }
//                 },
//                 Register: async (email, password) => {
//                     try {
//                         await auth().createUserWithEmailAndPassword(email, password)
//                     } catch (e) {
//                         console.log('error ==>', e)
//                     }

//                 },
//                 Logout: async () => {
//                     try {
//                         await auth().signOut()
//                     } catch (e) {
//                         console.log('error ==>', e)
//                     }

//                 },

//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }