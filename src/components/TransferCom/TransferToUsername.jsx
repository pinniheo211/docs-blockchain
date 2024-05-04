import { TextField } from "@mui/material";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const TransferToUsername = ({ t }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [transferId, setTransferId] = useState(null);

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
      to: "",
      amount: "",
      twoFA: "",
    },
  });

  return (
    <div className="mt-10 w-full flex items-center justify-center gap-2 flex-col">
      <form
        className="mt-5 w-full lg:w-2/4"
        // onSubmit={handleSubmit(handleTransferAddress)}
      >
        <div className="flex flex-col gap-5">
          <Controller
            name="to"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                // error={Boolean(errors.to)}
                // helperText={errors.to?.message || ""}
                label="Tên đăng nhập"
              />
            )}
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  error={Boolean(errors.amount)}
                  helperText={errors.amount?.message || ""}
                  label="Số tiền"
                />
              )}
            />
          </div>
          <Controller
            name="twoFA"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                error={Boolean(errors.twoFA)}
                helperText={errors.twoFA?.message || ""}
                label="2FA"
              />
            )}
          />
        </div>
        <button
          type="submit"
          className={` flex justify-center items-center mt-5 disabled:opacity-50 disabled:-translate-y-0 w-full h-[50px] !bg-gradient-dark-pink rounded-lg mx-auto text-white hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
        >
          <span className="text-sm text-white block">Chuyển tiền</span>
          {/* {transferAddressLoading && (
            <span className="w-5" style={{ transform: "scale(0.3)" }}>
              <LoaderStyleOne />
            </span>
          )} */}
        </button>
      </form>
    </div>
  );
};
