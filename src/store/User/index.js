import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    // SIGN IN
    countryCode: "",
    mobileNumber: "",
    confirm: "",

    // VERIFY OTP
    otp: "",

    // AUTHENTICATED USER
    loggedIn: false,
    userObj: "",

    // PERSONAL INFO
    name: "",
    email: "",

    // ADDRESS SET
    address: "",
    fulladdress: "",
    latitude: 0,
    longitude: 0,

    // CHANGE MOBILE NUMBER
    verificationId: "",
  },

  reducers: {
    // AUTH CHECK
    requestCheckAuth: (state) => {},
    // SIGN IN
    requestSignIn: (state, { payload: { countryCode, mobileNumber } }) => {
      state.countryCode = countryCode;
      state.mobileNumber = mobileNumber;
    },
    // RESEND OTP
    resendOtp: (state) => {},
    // OTP SENT WHILE SIGNIN AND COMFIRMATION SAVE
    saveConfirmation: (state, { payload: { confirm } }) => {
      state.confirm = confirm;
    },
    // VERIFY OTP
    requestVerifyOtp: (state, { payload: { otp } }) => {
      state.otp = otp;
    },
    // SIGN IN SUCCESS OR LOGOUT SUCCESS
    setUserData: (state, { payload: { loggedIn, userObj } }) => {
      state.loggedIn = loggedIn;
      state.userObj = userObj;
    },
    // PERSONAL INFO UPDATE
    personalInfoUpdate: (state, { payload: { name, email } }) => {
      state.name = name;
      state.email = email;
    },
    // SET ADDRESS OR UPDATE ADDRESS
    updateAddress: (state, { payload: { address, fulladdress, latitude, longitude } }) => {
      state.address = address;
      state.fulladdress = fulladdress;
      state.latitude = latitude;
      state.longitude = longitude;
    },
    // CHANGE MOBILE NUMBER
    changeMobileNumber: (state, { payload: { countryCode, mobileNumber } }) => {
      state.countryCode = countryCode;
      state.mobileNumber = mobileNumber;
    },
    // OTP SENT FOR CHANGE MOBILE NUMBER AND SAVE VERIFICATION ID
    saveVerificationId: (state, { payload: { verificationId } }) => {
      state.verificationId = verificationId;
    },
    // VERIFY OTP FOR CHANGE MOBILE NUMBER
    verifyOTPChange: (state, { payload: { otp } }) => {
      state.otp = otp;
    },
    // UPDATE PROFILE
    updateProfile: () => {},

    // LOGOUT
    logoutUser: (state) => {},
  },
});

export const {
  requestCheckAuth,
  requestSignIn,
  resendOtp,
  saveConfirmation,
  requestVerifyOtp,
  setUserData,
  personalInfoUpdate,
  updateAddress,
  changeMobileNumber,
  saveVerificationId,
  verifyOTPChange,
  updateProfile,
  logoutUser,
} = user.actions;

export default user.reducer;
