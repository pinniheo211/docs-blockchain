"use client";

import { AccountSkeleton } from "@/components/skeleton/AccountSkeleton";
import { CurrencyNumericFormat } from "@/lib/react-number-input";
import LayoutDashboard from "@/sections/Dashboard";
import { loginTheme } from "@/until/theme";
import {
  Avatar,
  Badge,
  Container,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useSelector } from "react-redux";
const AccountComponent = () => {
  const { data: dataProfile, loading: loadingProfile } = useSelector(
    (state) => state.profile.getProfile
  );
  return (
    <LayoutDashboard>
      <Head>
        <title>Account | Now Blockchain</title>
      </Head>
      <div className="relative overflow-hidden min-h-screen">
        <div
          className="-z-1 w-full h-[100vh] absolute left-[15%] top-[20%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="-z-1 w-full h-[100vh] absolute left-[5%] top-[10%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer.png)`,
          }}
        ></div>
        <div className="container max-w-6xl mx-auto flex items-center justify-center flex-col gap-3 mt-4">
          {loadingProfile ? (
            <AccountSkeleton />
          ) : (
            <>
              <Badge badgeContent={"Level 4"} color="success" variant="dot">
                <Avatar
                  src={`/`}
                  sx={{
                    height: 200,
                    width: 200,
                  }}
                />
              </Badge>

              <Typography variant="h5">
                {dataProfile?.data?.username}
              </Typography>
              <ThemeProvider theme={loginTheme}>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  className="text-center !mb-5"
                >
                  {dataProfile?.data?.name_country}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      disabled
                      fullWidth
                      label="Username"
                      shrink="true"
                      value={dataProfile?.data?.username || ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      disabled
                      fullWidth
                      label="Email"
                      shrink="true"
                      value={dataProfile?.data?.email || ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      disabled
                      fullWidth
                      shrink="true"
                      label="Phone"
                      value={dataProfile?.data?.phone || ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      shrink="true"
                      disabled
                      type="text"
                      autoComplete="off"
                      label="Live Balance"
                      value={dataProfile?.data?.livebalance || ""}
                      InputProps={{
                        inputComponent: CurrencyNumericFormat,
                        endAdornment: (
                          <InputAdornment position="end">USDT</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      disabled
                      fullWidth
                      shrink="true"
                      label="2FA"
                      value={dataProfile?.data?.mfa === 0 ? "FALSE" : "TRUE"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      disabled
                      fullWidth
                      shrink="true"
                      label="KYC"
                      value={dataProfile?.data?.kyc_status || ""}
                    />
                  </Grid>
                </Grid>
              </ThemeProvider>
            </>
          )}
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default AccountComponent;
