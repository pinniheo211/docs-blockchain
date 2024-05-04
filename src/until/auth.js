export const MOO_USER_KEY = "MOO_USER";

export const setToken = (data) => {
  localStorage.setItem(process.env.auth, JSON.stringify(data));
};

export const clearToken = () => {
  localStorage.removeItem(process.env.auth);
};

const local = typeof window !== "undefined";
export const getUserLocalStorage = () => {
  if (local) {
    const token = localStorage.getItem(MOO_USER_KEY);
    return JSON.parse(token);
  }
};

export const getLoggedInAccount = () => {
  if (local) {
    const account = getUserLocalStorage();
    return Object.keys(account || {})?.length > 0 ? account : null;
  }
};

export const removeUser = (key) => {
  localStorage.removeItem(key);
};

export const isAuthenticated = () => {
  const user = getLoggedInAccount();
  if (user === null) {
    return false;
  } else {
    // const { isVerify: is_verify, is_verify_2fa } = user || {};
    // if (!is_verify && !is_verify_2fa) {
    //   return false;
    // } else {
    return true;
    // }
  }
};

export default function auth() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("auth")) {
      return JSON.parse(localStorage.getItem("auth"));
    }
    return false;
  }
  return false;
}

export const getToken = () => {
  if (localStorage.getItem("access_token")) {
    return localStorage.getItem("access_token");
  }
  return false;
};
