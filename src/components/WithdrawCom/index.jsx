import { Box, Tab, Tabs, ThemeProvider } from "@mui/material";
import { useState } from "react";

import { WithdrawBalance } from "./WithdrawBalance";
import { WithdrawRemain } from "./WithdrawRemaining";
import WithDrawHistory from "./history/WithdrawHistory";
import { loginTheme } from "@/until/theme";
import SkeletonWithdraw from "../skeleton/WithdrawSkeleton";
// import { WithdrawRemain } from "./withdraw/WithdrawRemain";
// import WithDrawHistory from "./withdraw/history/index";
export default function WithdrawCom() {
  const [valueTab, setValueTab] = useState("BALANCE");

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  const a = false;
  return (
    <ThemeProvider theme={loginTheme}>
      <div className="container flex flex-col gap-4">
        {a ? (
          <SkeletonWithdraw />
        ) : (
          <>
            <span className="font-semibold text-2xl text-qblacktext">
              Rút tiền
            </span>
            <div>
              <div className="  mb-10 rounded-lg  mt-3">
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={valueTab}
                    onChange={handleChange}
                    textColor="primary"
                    variant="scrollable"
                    indicatorColor="primary"
                    aria-label="primary tabs example"
                  >
                    <Tab value="BALANCE" label="Rút tiền" />
                    {/* <Tab value="REMAINNING" label="Rút tiền về Ví" /> */}
                  </Tabs>
                  {valueTab === "BALANCE" ? (
                    <WithdrawBalance />
                  ) : (
                    // <div>Withdraw BAllance</div>
                    <WithdrawRemain />
                    // <div>Withdraw Remaining</div>
                  )}
                </Box>
              </div>
              <span className="font-semibold text-2xl text-qblacktext">
                History Withdraw
              </span>
              <WithDrawHistory valueTab={valueTab} />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
