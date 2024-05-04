import { Box, Tab, Tabs, ThemeProvider } from "@mui/material";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { TransferToAddress } from "./TransferToAddress";
import { loginTheme } from "@/until/theme";
import { TransferToUsername } from "./TransferToUsername";
import TransferHistory from "./history/TransferHistory";
import SkeletonWithdraw from "../skeleton/WithdrawSkeleton";

export default function TransferCom() {
  const statusObj = [
    { text: "PENDING", color: "secondary" },

    { text: "Success", color: "success" },
  ];
  const [valueTab, setValueTab] = useState("WALLET");
  const [note, setNote] = useState(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    resetField,
    reset,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      wallet_address: "",
      username: "",
      price: "",
      type: "NOW",
      twoFA: "",
    },
  });

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
    reset();
    clearErrors();
  };

  const handleChangeHistory = (event, newValue) => {
    setTabHistory(newValue);
  };

  const a = false;

  return (
    <ThemeProvider theme={loginTheme}>
      <div className="flex flex-col gap-4 container">
        {a ? (
          <SkeletonWithdraw />
        ) : (
          <>
            <span className="font-semibold text-2xl text-qblacktext">
              Chuyển tiền
            </span>

            <div>
              <div className="sm:p-10 p-3  rounded-lg">
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={valueTab}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="primary tabs example"
                  >
                    <Tab value="WALLET" label="Địa chỉ ví" />
                    <Tab value="USERNAME" label="Tên đăng nhập" />
                  </Tabs>
                  {valueTab === "WALLET" ? (
                    <TransferToAddress />
                  ) : (
                    <TransferToUsername />
                  )}
                </Box>
              </div>
              <TransferHistory type={valueTab} />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
