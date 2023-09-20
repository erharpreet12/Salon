// import { takeEvery, put, select } from "redux-saga/effects";
// import {
//   requestCheckAuth,
//   requestSignIn,
//   resendOtp,
//   saveConfirmation,
//   requestVerifyOtp,
//   setUserData,
//   personalInfoUpdate,
//   updateAddress,
//   changeMobileNumber,
//   saveVerificationId,
//   verifyOTPChange,
//   updateProfile,
//   logoutUser,
// } from "./index";
// import auth from "@react-native-firebase/auth";
// import Toast from "react-native-simple-toast";
// import { getDocument, setDocument, updateDocument } from "../../Services/Firestore";
// import { modals } from "../../modals";
// import { constants } from "../../Utils/Constants";
// import { goBack, navigate } from "../../Navigators/navigateService";
// import { showLoader, hideLoader, showToast } from ".?App/saga";
// import { uploadFile } from "../../Services/FireStorage";
// import Config from "Utils/Config";

// // Check authentication
// export function* onCheckAuth() {
//   try {
//     const userData = yield auth().currentUser;
//     if (userData) {
//       yield processUser(userData);
//     } else {
//       saveUserData(null);
//     }
//   } catch (error) {
//     yield errorHandling(error);
//   }
// }

// // Sign in
// export function* onSignIn({ payload }) {
//   try {
//     yield* showLoader();
//     let mobileNumber = payload.countryCode + payload.mobileNumber;
//     const confirmation = yield auth().signInWithPhoneNumber(mobileNumber);
//     yield put(
//       saveConfirmation({
//         confirm: confirmation,
//       })
//     );
//     yield* hideLoader();
//     navigate(Config.Otp);
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Resend Otp
// export function* onResendOtp() {
//   try {
//     yield* showLoader();
//     const user = yield select((state) => state.user);
//     let mobileNumber = user.countryCode + user.mobileNumber;
//     const confirmation = yield auth().signInWithPhoneNumber(mobileNumber, true);
//     yield put(
//       saveConfirmation({
//         confirm: confirmation,
//       })
//     );
//     yield showToast("OTP sent successfully");
//     yield* hideLoader();
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Verify otp
// export function* onVerifyOtp({ payload }) {
//   try {
//     yield* showLoader();
//     const user = yield select((state) => state.user);
//     yield user.confirm.confirm(payload.otp);
//     const userData = yield auth().currentUser;
//     yield processUser(userData);
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Personal info update
// function* updatePersonalInfo({ payload }) {
//   try {
//     yield* showLoader();
//     const user = yield select((state) => state.user);
//     const userObj = new modals.User(user.userObj);
//     userObj.name = payload.name;
//     userObj.email = payload.email;
//     const userCreateResponse = yield updateDocument(`users/${userObj.id}`, userObj);
//     if (userCreateResponse) {
//       const userObbj = new modals.User(userObj);
//       yield saveUserData(userObbj);
//     } else {
//       yield* hideLoader();
//     }
//   } catch (error) {
//     yield* hideLoader();
//     Toast.show(error.message, Toast.SHORT);
//   }
// }

// // Add address and update address
// function* onUpdateAddress({ payload }) {
//   try {
//     yield* showLoader();
//     const user = yield select((state) => state.user);
//     const userObj = new modals.User(user.userObj);
//     userObj.address = payload.address;
//     userObj.fulladdress = payload.fulladdress;
//     userObj.latitude = payload.latitude;
//     userObj.longitude = payload.longitude;

//     const userCreateResponse = yield updateDocument(`users/${userObj.id}`, userObj);

//     if (userCreateResponse) {
//       const userObbj = new modals.User(userObj);
//       yield saveUserData(userObbj);
//     } else {
//       yield* hideLoader();
//     }
//   } catch (error) {
//     yield* hideLoader();
//     Toast.show(error.message, Toast.SHORT);
//   }
// }

// // Change mobile number
// function* onChangeMobileNumber({ payload }) {
//   try {
//     yield* showLoader();
//     const snapshot = yield auth()
//       .verifyPhoneNumber(payload.countryCode + payload.mobileNumber)
//       .catch((error) => {
//         throw error;
//       });
//     yield put(saveVerificationId({ verificationId: snapshot.verificationId }));
//     yield* hideLoader();
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Verify otp for change mobile number
// function* onVerifyOTPChange({ payload }) {
//   const user = yield select((state) => state.user);
//   const userObj = new modals.User(user.userObj);
//   try {
//     yield* showLoader();
//     const credential = auth.PhoneAuthProvider.credential(user.verificationId, payload.otp);
//     const data = yield auth().currentUser.updatePhoneNumber(credential);
//     userObj.countryCode = user.countryCode;
//     userObj.mobileNumber = user.mobileNumber;
//     userObj.phoneNumber = user.countryCode + user.mobileNumber;
//     const userCreateResponse = yield updateDocument(`users/${userObj.id}`, userObj);
//     if (userCreateResponse) {
//       yield saveUserData(userObj);
//     } else {
//       yield* hideLoader();
//     }
//     yield put(saveVerificationId({ verificationId: "" }));
//     goBack();
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Change mobile number
// function* onUpdateProfile({ payload }) {
//   try {
//     yield* showLoader();
//     const user = yield select((state) => state.user);
//     const userObj = new modals.User(user.userObj);
//     console.log("payload", payload);
//     let imageUrl = yield uploadFile("profileImages", payload.profileImage);

//     userObj.profileImage = imageUrl;
//     const userCreateResponse = yield updateDocument(`users/${userObj.id}`, userObj);
//     if (userCreateResponse) {
//       yield saveUserData(userObj);
//     } else {
//       yield* hideLoader();
//     }
//   } catch (error) {
//     yield* hideLoader();
//     yield errorHandling(error);
//   }
// }

// // Logout user
// function* onLogoutUser() {
//   yield auth().signOut();
//   yield saveUserData(null);
// }

// // Check user exists in firestore or not
// function* processUser(userData) {
//   try {
//     const user = yield getDocument(`users/${userData.uid}`);
//     if (user) {
//       const userObj = new modals.User(user);
//       yield saveUserData(userObj);
//     }
//   } catch (error) {
//     if (error.message === constants.NO_DATA_EXISTS) {
//       yield createUser(userData);
//     } else {
//       yield* hideLoader();
//       Toast.show(error.message, Toast.SHORT);
//     }
//   }
// }

// // Create user in Firestore
// function* createUser(userData) {
//   const state = yield select((state) => state.user);
//   let userObj = modals.User.getInitialState();
//   userObj.id = userData.uid;
//   // userObj.referralLink = await _R.modals.User.getRefferalLink(
//   //   userData.uid
//   // );
//   // userObj.fcmToken = store.getState()._misc.fcmToken;
//   userObj.countryCode = state.countryCode;
//   userObj.mobileNumber = state.mobileNumber;
//   userObj.phoneNumber = userData.phoneNumber;
//   userObj.platform = Platform.OS;

//   const userCreateResponse = yield setDocument(`users/${userData.uid}`, userObj);
//   if (userCreateResponse) {
//     try {
//       const userObbj = new modals.User(userObj);
//       yield saveUserData(userObbj);
//     } catch (e) {
//       yield* hideLoader();
//     }
//   } else {
//     yield* hideLoader();
//   }
// }

// // Save user data in redux
// function* saveUserData(userObj) {
//   try {
//     yield put(
//       setUserData({
//         loggedIn: userObj ? true : false,
//         userObj: userObj,
//       })
//     );
//     yield* hideLoader();
//   } catch (error) {
//     Toast.show(error.message, Toast.SHORT);
//     yield* hideLoader();
//   }
// }

// function* errorHandling(error) {
//   console.log("CURRENT ERROR", error);
//   switch (error.code) {
//     case "auth/invalid-phone-number":
//       yield showToast("Invalid mobile number");
//       break;
//     case "auth/invalid-verification-code":
//       yield showToast("Invalid otp");
//       break;
//     case "auth/credential-already-in-use":
//       yield showToast("User already register with this number");
//       break;
//   }
// }

// export default function* userSaga() {
//   yield takeEvery(requestCheckAuth, onCheckAuth);
//   yield takeEvery(requestSignIn, onSignIn);
//   yield takeEvery(resendOtp, onResendOtp);
//   yield takeEvery(requestVerifyOtp, onVerifyOtp);
//   yield takeEvery(personalInfoUpdate, updatePersonalInfo);
//   yield takeEvery(updateAddress, onUpdateAddress);
//   yield takeEvery(changeMobileNumber, onChangeMobileNumber);
//   yield takeEvery(verifyOTPChange, onVerifyOTPChange);
//   yield takeEvery(updateProfile, onUpdateProfile);
//   yield takeEvery(logoutUser, onLogoutUser);
// }
