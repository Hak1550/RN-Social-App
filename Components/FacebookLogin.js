// import React from 'react';
// import { View } from 'react-native'
// import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";


// const Facebook_Login = () => {

//     // Attempt a login using the Facebook login dialog asking for default permissions.
//     LoginManager.logInWithPermissions(["public_profile"]).then(
//         function (result) {
//             if (result.isCancelled) {
//                 console.log("Login cancelled");
//             } else {
//                 console.log(
//                     "Login success with permissions: " +
//                     result.grantedPermissions.toString()
//                 );
//             }
//         },
//         function (error) {
//             console.log("Login fail with error: " + error);
//         }
//     );
//     console.log("FaceBook Login Clicked")
// }





// // import auth from '@react-native-firebase/auth';
// // import { LoginManager, AccessToken } from 'react-native-fbsdk';


// // async function Facebook_Login() {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //         throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the users AccesToken
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //         throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     return auth().signInWithCredential(facebookCredential);
// // }









// export default Facebook_Login