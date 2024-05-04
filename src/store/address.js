import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AddressService, DashboardService } from "./api/index";

const actionGetCountry = createAsyncThunk("address/country", async () => {
  try {
    const res = await AddressService.doAddress({
      type: "country",
      parent: "",
    });
    if (res.status === 200) {
      return res.data.data;
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

const actionGetProvince = createAsyncThunk(
  "address/province",
  async (parent) => {
    try {
      const res = await AddressService.doAddress({
        type: "province",
        parent: parent,
      });
      if (res.status === 200) {
        return res.data.data;
      } else {
        toast.error(res.data.message);
        return res.data;
      }
    } catch (error) {
      const message = error.response.data?.message || error.message;
      toast.error(message);
      return error.response.data;
    }
  }
);

const actionGetDistrict = createAsyncThunk(
  "address/district",
  async (parent) => {
    try {
      const res = await AddressService.doAddress({
        type: "district",
        parent: parent,
      });
      if (res.status === 200) {
        return res.data.data;
      } else {
        toast.error(res.data.message);
        return res.data;
      }
    } catch (error) {
      const message = error.response.data?.message || error.message;
      toast.error(message);
      return error.response.data;
    }
  }
);

const actionGetWard = createAsyncThunk("address/ward", async (wardId) => {
  try {
    const res = await AddressService.doAddress({
      type: "ward",
      parent: wardId,
    });
    if (res.status === 200) {
      return res.data.data;
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

const actionUpdateAddress = createAsyncThunk(
  "address/update_address",
  async (data) => {
    try {
      const res = await AddressService.doUpdateAddress(data);
      if (res.status === 200) {
        toast.success(res.data.message);
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
  }
);

const { reducer, actions } = createSlice({
  name: "address",
  initialState: {
    country: {
      loading: false,
      data: [],
      error: "",
    },
    province: {
      loading: false,
      data: [],
      error: "",
    },
    district: {
      loading: false,
      data: [],
      error: "",
    },
    ward: {
      loading: false,
      data: [],
      error: "",
    },
    updateAddress: {
      loading: false,
      data: [],
      error: "",
    },
  },
  reducers: {
    //  actionSetDistrict: (state, action) => {
    //       state.detailTemplate.data = action.payload
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionGetCountry.pending, (state) => {
        state.country.loading = true;
      })
      .addCase(actionGetCountry.rejected, (state, action) => {
        state.country.loading = false;
        state.country.error = action.payload;
        state.country.data = {};
      })
      .addCase(actionGetCountry.fulfilled, (state, action) => {
        state.country.loading = false;
        state.country.data = action.payload;
        state.country.error = "";
      })
      .addCase(actionGetProvince.pending, (state) => {
        state.province.loading = true;
      })
      .addCase(actionGetProvince.rejected, (state, action) => {
        state.province.loading = false;
        state.province.error = action.payload;
        state.province.data = {};
      })
      .addCase(actionGetProvince.fulfilled, (state, action) => {
        state.province.loading = false;
        state.province.data = action.payload;
        state.province.error = "";
      })
      .addCase(actionGetDistrict.pending, (state) => {
        state.district.loading = true;
      })
      .addCase(actionGetDistrict.rejected, (state, action) => {
        state.district.loading = false;
        state.district.error = action.payload;
        state.district.data = {};
      })
      .addCase(actionGetDistrict.fulfilled, (state, action) => {
        state.district.loading = false;
        state.district.data = action.payload;
        state.district.error = "";
      })
      .addCase(actionGetWard.pending, (state) => {
        state.ward.loading = true;
      })
      .addCase(actionGetWard.rejected, (state, action) => {
        state.ward.loading = false;
        state.ward.error = action.payload;
        state.ward.data = {};
      })
      .addCase(actionGetWard.fulfilled, (state, action) => {
        state.ward.loading = false;
        state.ward.data = action.payload;
        state.ward.error = "";
      })
      .addCase(actionUpdateAddress.pending, (state) => {
        state.updateAddress.loading = true;
      })
      .addCase(actionUpdateAddress.rejected, (state, action) => {
        state.updateAddress.loading = false;
        state.updateAddress.error = action.payload;
        state.updateAddress.data = {};
      })
      .addCase(actionUpdateAddress.fulfilled, (state, action) => {
        state.updateAddress.loading = false;
        state.updateAddress.data = action.payload;
        state.updateAddress.error = "";
      });
  },
});

export default reducer;

export {
  actionGetProvince,
  actionGetDistrict,
  actionGetWard,
  actionUpdateAddress,
  actionGetCountry,
};
