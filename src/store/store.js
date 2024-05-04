import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import dashboard from "./dashboard";
import profile from "./profile";
import upload from "./upload";
import address from "./address";

export default configureStore({
  reducer: {
    auth: auth,
    dashboard: dashboard,
    profile: profile,
    address: address,
    upload: upload,
  },
});
