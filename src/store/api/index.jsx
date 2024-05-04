import { getToken } from "@/until/auth";
import axios from "axios";
// export const NEXT_BASE_URL = "https://nowblockchain.largeswap.com/";
// export const BASE_URL_IMAGE = "https://now-file.largeswap.com/";

// export const NEXT_BASE_URL = "http://192.168.1.11:3030/";
export const NEXT_BASE_URL = "https://swzapiwebv5.toearnnow.com:4099/";
export const BASE_URL_IMAGE = "https://apinewnew.toearnnow.com/";

const API = axios.create({
  baseURL: NEXT_BASE_URL,
});

API.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("auth");
      localStorage.removeItem("access_token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const API_TOEARNNOW = axios.create({
  baseURL: NEXT_BASE_URL,
});

API_TOEARNNOW.interceptors.request.use((req) => {
  const token = getToken();
  // if (token) {
  // req.headers.sessionID = `Ftv5AQepZjtfiyUGjHq6OSoIYq_Z_Xhpz`;
  // }
  return req;
});

API_TOEARNNOW.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("auth");
      localStorage.removeItem("access_token");
      // window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

//auth
export const AuthService = {
  doRegister: (data) => API.post("api/v1/user/auth/sign-up", data),
  doLogin: (data) => API.post("api/v1/user/auth/sign-in", data),
  doForgot: (data) => API.post("api/v1/user/auth/forgot-password", data),
  doResetPass: (data) =>
    API.post("api/v1/user/auth/confirm-forgot-password", data),
  getVerifyMail: (data) => API.post("api/v1/user/auth/resend-email", data),
  doVerifyMail: (data) => API.post("api/v1/user/auth/verify-email", data),
  doChangePass: (data) => API.post("api/v1/user/profile/change-password", data),
};

//dashboard
export const DashboardService = {
  doGetListFund: (data) => API_TOEARNNOW.get("api/v1/user/fund/list"),
  doStatistical: () => API.get("api/v1/user/profile/statistical"),
  doGetTree: () => API.get("api/v1/user/system/tree"),
  doGetTreeTable: () => API.get("api/v1/user/system/tree-table"),
};

//address
export const AddressService = {
  doAddress: ({ type, parent }) =>
    API.get(
      `api/v1/common/master/local?type=${type}${
        parent ? `&parent=${parent}` : ""
      }`
    ),
  doUpdateAddress: (data) =>
    API.post(`api/v1/user/profile/update-address`, data),
};

//profile
export const ProfileService = {
  doKYC: (data) => API.post(`api/v1/user/profile/kyc`, data),
  doUpdatePhone: (data) => API.put(`api/v1/user/profile/update-phone`, data),
  doGetProfile: () => API.get("api/v1/user/profile"),
};

//upload
export const UploadFileService = {
  doSingleUpload: (data) => API.post(`api/v1/file/image/single-upload`, data),
  doBulkUpload: (data) =>
    API.post(`api/v1/file/image/bulk-upload`, { files: data }),
};

//bank
export const BankService = {
  doGetBank: () => API.get("api/v1/user/profile/bank"),
  doAddBank: (data) => API.post("api/v1/user/profile/bank", data),
  doGetBankMaster: () => API.get("api/v1/common/master/bank"),
  doGetBankAdmin: () => API.get("api/v1/common/master/bank-admin"),
  doGetBankQR: (data) =>
    API.get(
      `api/v1/user/deposit/bank-qr?adminBankId=${data?.adminBankId}&amount=${data?.amount}`
    ),
  doCreateDeposit: (data) => API.post(`api/v1/user/deposit/create`, data),
  doCreateWithdraw: (data) => API.post(`api/v1/user/withdraw/create`, data),
};

//history
export const HistoryService = {
  doGetDeposit: (data) =>
    API.get(
      `api/v1/user/deposit/history?limit=${data.limit}&page=${data.page}`
    ),
  doGetWithdraw: (data) =>
    API.get(
      `api/v1/user/withdraw/history?limit=${data.limit}&page=${data.page}`
    ),
  doGetCommission: (data) =>
    API.get(
      `api/v1/user/tree/commission?limit=${data.limit}&page=${data.page}&keyword=${data.keyword}`
    ),
  doGetOrder: (data) =>
    API.get(`api/v1/user/order/history?limit=${data.limit}&page=${data.page}`),
  doGetSell: (data) =>
    API.get(
      `api/v1/user/tree/history-sell?limit=${data.limit}&page=${data.page}`
    ),
  doGetUnlockQuantity: (data) =>
    API.get(
      `api/v1/user/tree/history-unlock?limit=${data.limit}&page=${data.page}`
    ),
};

//tree
export const TreeService = {
  doGetTree: () => API.get(`api/v1/user/tree/list`),
  doGetMyTree: () => API.get(`api/v1/user/tree/my-tree`),
  doGetDetailMyTree: (params) => API.get(`api/v1/user/tree/detail/${params}`),
  doBuyTree: (data) => API.post(`api/v1/user/tree/buy`, data),
  doSellTree: (data) => API.post(`api/v1/user/tree/sell`, data),
  doSellSoonTree: (params) => API.post(`api/v1/user/tree/sell-soon/${params}`),
  doGetPrice: () => API.get(`api/v1/common/master/price`),
};

//order
export const OrderService = {
  doCreateOrder: (data) => API.post(`api/v1/user/order/create`, data),
  doCancelOrder: (params) => API.post(`api/v1/user/order/cancel/${params}`),
  doReceiveOrder: (params) => API.post(`api/v1/user/order/receive/${params}`),
};
