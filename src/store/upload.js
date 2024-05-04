import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { UploadFileService } from "./api/index";

const actionSingleUpload = createAsyncThunk("upload/single", async (data) => {
  const id = toast.loading("Loading...");
  try {
    const res = await UploadFileService.doSingleUpload(data);
    if (res.status === 200) {
      toast.update(id, {
        render: `${res.data.message} 👌`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      return res.data.data;
    } else {
      toast.update(id, {
        render: `${res.data.message} 👌`,
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
      return [];
    }
  } catch (error) {
    const message = error.response.data?.message || error.message;
    toast.update(id, {
      render: `${message} 🥹`,
      type: "error",
      isLoading: false,
      autoClose: 1500,
    });
    return error.response.data;
  }
});

const actionBulkUpload = createAsyncThunk("upload/bulk", async (data) => {
  try {
    const res = await UploadFileService.doBulkUpload(data);
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
});

const { reducer, actions } = createSlice({
  name: "upload",
  initialState: {
    singleUpload: {
      loading: false,
      data: [],
      error: "",
    },
    bulkUpload: {
      loading: false,
      data: [],
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionSingleUpload.pending, (state) => {
        state.singleUpload.loading = true;
      })
      .addCase(actionSingleUpload.rejected, (state, action) => {
        state.singleUpload.loading = false;
        state.singleUpload.error = action.payload;
        state.singleUpload.data = {};
      })
      .addCase(actionSingleUpload.fulfilled, (state, action) => {
        state.singleUpload.loading = false;
        state.singleUpload.data = action.payload;
        state.singleUpload.error = "";
      })
      .addCase(actionBulkUpload.pending, (state) => {
        state.bulkUpload.loading = true;
      })
      .addCase(actionBulkUpload.rejected, (state, action) => {
        state.bulkUpload.loading = false;
        state.bulkUpload.error = action.payload;
        state.bulkUpload.data = {};
      })
      .addCase(actionBulkUpload.fulfilled, (state, action) => {
        state.bulkUpload.loading = false;
        state.bulkUpload.data = action.payload;
        state.bulkUpload.error = "";
      });
  },
});

export default reducer;

export { actionBulkUpload, actionSingleUpload };
