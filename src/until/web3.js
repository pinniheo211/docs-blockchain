import { actionSetUserInfo } from "@/store/profile";
import { toastMessage } from "./toastMessage";
import { MESSAGE } from "@/constants/message";

export const connectWallet = async (
  dispatch,
  userInfo,
  searchParams,
  router
) => {
  if (userInfo) {
    localStorage.removeItem("user");
    dispatch(actionSetUserInfo(null));
    toastMessage("Disconnected success!", MESSAGE.SUCCESS);
    localStorage.removeItem("auth");
    localStorage.removeItem("access_token");
    router.push("/");
    return;
  }
  try {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (account && account.length) {
        // const ref = searchParams.get("ref");
        // handleSignin(dispatch, { wallet: account[0], ref: ref ? ref : "" });
        localStorage.setItem("access_token", "token");
        localStorage.setItem("auth", JSON.stringify({ address: account[0] }));
        router.push("/dashboard");
        dispatch(actionSetUserInfo({ address: account[0] }));
        localStorage.setItem("user", JSON.stringify({ address: account[0] }));
        toastMessage("Connected success!", MESSAGE.SUCCESS);
      }
    } else {
      toastMessage(
        "Please install metamask to use this function!",
        MESSAGE.ERROR
      );
    }
  } catch (error) {
    toastMessage("Metamask is open! Please confirm!", MESSAGE.ERROR);
  }
};
