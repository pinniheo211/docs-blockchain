import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProfileService } from "./api/index";

const actionGetProfile = createAsyncThunk(
  "profile/getProfile",
  async (data) => {
    try {
      const res = await ProfileService.doGetProfile(data);
      if (res.status === 200) {
        return res.data.data;
      } else {
        toast.error(res.data.message);
        return [];
      }
    } catch (error) {
      const message = error.response.data?.message || error.message;
      toast.error(message);
      return error.response.data;
    }
  }
);

const actionKYC = createAsyncThunk("profile/kyc", async (data) => {
  try {
    const res = await ProfileService.doKYC(data);
    if (res.status === 200) {
      toast.success(res.data.message);
      return res.data;
    } else {
      toast.error(res.data.message);
      return [];
    }
  } catch (error) {
    const message = error.response.data?.message || error.message;
    toast.error(message);
    return error.response.data;
  }
});

const actionUpdatePhone = createAsyncThunk(
  "profile/update-phone",
  async (data) => {
    try {
      const res = await ProfileService.doUpdatePhone(data);
      if (res.status === 200) {
        toast.success(res.data.message);
        return res.data;
      } else {
        toast.error(res.data.message);
        return [];
      }
    } catch (error) {
      const message = error.response.data?.message || error.message;
      toast.error(message);
      return error.response.data;
    }
  }
);
const actionSetUserInfo = createAsyncThunk(
  "profile/set-user-info",
  async (data) => {
    return data;
  }
);

const { reducer, actions } = createSlice({
  name: "profile",
  initialState: {
    getProfile: {
      loading: false,
      data: [],
      error: "",
    },
    KYC: {
      loading: false,
      data: [],
      error: "",
    },
    updatePhone: {
      loading: false,
      data: [],
      error: "",
    },
    userInfo: {
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionGetProfile.pending, (state) => {
        state.getProfile.loading = true;
      })
      .addCase(actionGetProfile.rejected, (state, action) => {
        state.getProfile.loading = false;
        state.getProfile.error = action.payload;
        state.getProfile.data = {};
      })
      .addCase(actionGetProfile.fulfilled, (state, action) => {
        state.getProfile.loading = false;
        state.getProfile.data = action.payload;
        state.getProfile.error = "";
      })
      .addCase(actionKYC.pending, (state) => {
        state.KYC.loading = true;
      })
      .addCase(actionKYC.rejected, (state, action) => {
        state.KYC.loading = false;
        state.KYC.error = action.payload;
        state.KYC.data = {};
      })
      .addCase(actionKYC.fulfilled, (state, action) => {
        state.KYC.loading = false;
        state.KYC.data = action.payload;
        state.KYC.error = "";
      })
      .addCase(actionUpdatePhone.pending, (state) => {
        state.updatePhone.loading = true;
      })
      .addCase(actionUpdatePhone.rejected, (state, action) => {
        state.updatePhone.loading = false;
        state.updatePhone.error = action.payload;
        state.updatePhone.data = {};
      })
      .addCase(actionUpdatePhone.fulfilled, (state, action) => {
        state.updatePhone.loading = false;
        state.updatePhone.data = action.payload;
        state.updatePhone.error = "";
      })
      .addCase(actionSetUserInfo.fulfilled, (state, action) => {
        state.userInfo.data = action.payload;
      });
  },
});

export default reducer;

export { actionGetProfile, actionKYC, actionUpdatePhone, actionSetUserInfo };
