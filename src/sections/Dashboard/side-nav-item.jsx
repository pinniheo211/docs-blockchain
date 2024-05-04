import auth from "@/until/auth";
import { Box, ButtonBase } from "@mui/material";
import NextLink from "next/link";
import PropTypes from "prop-types";

// ... (your imports)

export const SideNavItem = (props) => {
  const { active = false, disabled, icon, path, title, handle } = props;
  const user = auth();
  const logout = () => {
    if (user) {
      localStorage.removeItem("auth");
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
  };
  return (
    <li>
      {handle ? (
        <ButtonBase
          onClick={logout}
          component="div"
          sx={{
            alignItems: "center",
            borderRadius: 1,
            display: "flex",
            justifyContent: "flex-start",
            pl: "16px",
            pr: "16px",
            py: "10px",
            textAlign: "left",
            width: "100%",
            ...(active && {
              background:
                "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
            }),
            "&:hover": {
              background:
                "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
            },
          }}
        >
          {icon && (
            <Box
              component="span"
              sx={{
                alignItems: "center",
                color: "#ffffff",
                display: "inline-flex",
                justifyContent: "center",
                mr: 2,
                ...(active && {
                  color: "#F40074",
                }),
              }}
            >
              {icon}
            </Box>
          )}
          <Box
            component="span"
            sx={{
              color: "#ffffff",
              flexGrow: 1,
              fontFamily: (theme) => theme.typography.fontFamily,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "24px",
              whiteSpace: "nowrap",
              ...(active && {
                color: "#ffffff",
              }),
              ...(disabled && {
                color: "neutral.500",
              }),
            }}
          >
            {title}
          </Box>
        </ButtonBase>
      ) : (
        <NextLink href={path} passHref>
          <ButtonBase
            component="div"
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "flex-start",
              pl: "16px",
              pr: "16px",
              py: "10px",
              textAlign: "left",
              width: "100%",
              ...(active && {
                background:
                  "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
              }),
              "&:hover": {
                background:
                  "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
              },
            }}
          >
            {icon && (
              <Box
                component="span"
                sx={{
                  alignItems: "center",
                  color: "#ffffff",
                  display: "inline-flex",
                  justifyContent: "center",
                  mr: 2,
                  ...(active && {
                    color: "#F40074",
                  }),
                }}
              >
                {icon}
              </Box>
            )}
            <Box
              component="span"
              sx={{
                color: "#ffffff",
                flexGrow: 1,
                fontFamily: (theme) => theme.typography.fontFamily,
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "24px",
                whiteSpace: "nowrap",
                ...(active && {
                  color: "#F40074",
                }),
                ...(disabled && {
                  color: "neutral.500",
                }),
              }}
            >
              {title}
            </Box>
          </ButtonBase>
        </NextLink>
      )}
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
