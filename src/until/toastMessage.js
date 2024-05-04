import { MESSAGE } from "@/constants/message";
import { toast } from "react-toastify";

export function toastMessage(message, type) {
  switch (type) {
    case MESSAGE.ERROR:
      return toast.error(`${message}`);
    case MESSAGE.SUCCESS:
      return toast.success(`${message}`);
    case MESSAGE.WARNING:
      return toast.warn(`${message}`);
    case MESSAGE.INFO:
      return toast.info(`${message}`);
  }
}
