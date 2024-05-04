import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { DashboardService } from "./api/index";

const actionGetListFund = createAsyncThunk("dashboard/get", async () => {
  try {
    const res = await DashboardService.doGetListFund();
    if (res.status === 200) {
      return res.data;
    } else {
      toast.error(res.data.message);
      return res.data;
    }
  } catch (error) {
    const message = error.response.data?.message || error.message;
    toast.error(message);
    return error.response.data;
  }
});

const { reducer, actions } = createSlice({
  name: "dashboard",
  initialState: {
    dashboard: {
      loading: false,
      data: [],
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionGetListFund.pending, (state, action) => {
        const isLoading = action.meta.arg ?? true;
        state.dashboard.loading = isLoading;
      })
      .addCase(actionGetListFund.rejected, (state, action) => {
        state.dashboard.loading = false;
        state.dashboard.error = action.payload;
        state.dashboard.data = {};
      })
      .addCase(actionGetListFund.fulfilled, (state, action) => {
        state.dashboard.loading = false;
        state.dashboard.data = action.payload;
        state.dashboard.error = "";
      });
  },
});

export default reducer;

export { actionGetListFund };
