import { MESSAGE } from "@/constants/message";
import { actionSetUserInfo } from "@/store/profile";
import auth from "@/until/auth";
import { toastMessage } from "@/until/toastMessage";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

export const AccountPopover = (props) => {
  const { data: userInfo } = useSelector((state) => state.profile.userInfo);
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const user = auth();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    // if (user) {
    //   onClose?.();
    //   localStorage.removeItem("auth");
    //   localStorage.removeItem("access_token");
    //   router.push("/login");
    // }
    localStorage.removeItem("user");
    dispatch(actionSetUserInfo(null));
    toastMessage("Disconnected success!", MESSAGE.SUCCESS);
    localStorage.removeItem("auth");
    localStorage.removeItem("access_token");
    router.push("/");
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      {/* <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Tài khoản</Typography>
        <Typography color="text.secondary" variant="body2">
          {userInfo?.address}
        </Typography>
      </Box> */}
      {/* <Divider /> */}
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>
          <p className="font-bold">Disconnect</p>
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
