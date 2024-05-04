import { Scrollbar } from "@/components/scrollbar";
import { actionGetProfile } from "@/store/profile";
import auth from "@/until/auth";
import { Box, Divider, Drawer, Stack, useMediaQuery } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";

export const SideNav = (props) => {
  const { data: dataProfile } = useSelector(
    (state) => state.profile.getProfile
  );
  const { open, onClose } = props;

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = auth();

  useEffect(() => {
    if (user && !dataProfile) {
      dispatch(actionGetProfile());
    }
  }, []);

  const content = (
    <Scrollbar
      sx={{
        height: "100vh",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-placeholder": {
          height: "auto !important",
        },
        "& .simplebar-scrollbar:before": {
          background: "#F40074",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box component={NextLink} href="/">
            <Box
              sx={{
                alignItems: "center",
                borderRadius: 1,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-center",
                gap: 2,
              }}
            >
              <img
                src="/Layer_1-2.png"
                alt="Site Logo"
                className="rounded-lg "
              />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#F40074" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={1}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                  handle={item.handle}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            background:
              "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
            color: "#ffffff",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          background: "#201340",
          color: "#ffffff",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
