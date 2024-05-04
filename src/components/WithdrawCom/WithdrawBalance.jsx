import { loginTheme } from "@/until/theme";
import { InputAdornment, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const WithdrawBalance = () => {
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    resetField,
    reset,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      wallet: "",
      amount: "",
      twoFA: "",
    },
  });

  return (
    <div className="mt-10 w-full flex items-center justify-center flex-col gap-2">
      <p className="text-2xl font-semibold mb-3">Rút tiền</p>
      <form className="w-full max-w-xl">
        <div className="flex flex-col gap-5">
          <Controller
            name="wallet"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                // error={Boolean(errors.wallet)}
                // helperText={errors.wallet?.message || ""}
                label="Địa chỉ"
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
                  //   error={Boolean(errors.amount)}
                  //   helperText={errors.amount?.message || ""}
                  //   InputProps={{
                  //     inputComponent: CurrencyNumericFormat,
                  //     endAdornment: (
                  //       <InputAdornment position="end">NOWp</InputAdornment>
                  //     ),
                  //   }}
                  label="Giá tiền"
                />
              )}
            />
            {/* <div className="w-full overflow-hidden flex flex-col sm:flex-row items-start justify-between px-1.5 gap-2">
              <p className="text-xs sm:text-[13px] font-medium break-words w-full sm:w-1/2">
                {t("form.actualReceive")} :{" "}
                {watch("amount")
                  ? formatMoney(
                      watch("amount") -
                        (watch("amount") * dataCoin?.data?.fee_widthdraw) / 100
                    )
                  : 0}{" "}
                <span className="text-[10px] sm:text-xs">NOWp</span>
              </p>
              <p className="text-xs sm:text-[13px] font-medium break-words w-full text-right sm:w-1/2">
                {t("form.fee")} :{" "}
                {watch("amount")
                  ? formatMoney(
                      (watch("amount") * dataCoin?.data?.fee_widthdraw) / 100
                    )
                  : 0}{" "}
                <span className="text-[10px] sm:text-xs">NOWp</span>
              </p>
            </div> */}
          </div>
          <Controller
            name="twoFA"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                // error={Boolean(errors.twoFA)}
                // helperText={errors.twoFA?.message || ""}
                label="2fa"
              />
            )}
          />
        </div>
        <button
          //   disabled={loadingWithdraw}
          type="submit"
          className={`flex !bg-gradient-dark-pink justify-center items-center mt-5 disabled:opacity-50 disabled:-translate-y-0 w-full h-[50px]  rounded-lg mx-auto text-white hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
        >
          <span className="text-sm text-white block">Rút tiền </span>
          {/* {loadingWithdraw && (
            <span className="w-5" style={{ transform: "scale(0.3)" }}>
              <LoaderStyleOne />
            </span>
          )} */}
        </button>
      </form>
      {/* <ModalVerifyWithdraw
        open={open}
        setOpen={setOpen}
        resetForm={resetForm}
        handleVerify={handleVerify}
        wallet_address={watch("wallet") || null}
      /> */}
    </div>
  );
};
