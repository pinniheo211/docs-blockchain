import { loginTheme } from "@/until/theme";
import { TextField, ThemeProvider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export const WithdrawRemain = ({ t }) => {
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
      amount: "",
      twoFA: "",
    },
  });

  return (
    <ThemeProvider theme={loginTheme}>
      <div className="mt-10 w-full flex items-center justify-center flex-col gap-2">
        <p className="text-2xl font-semibold mb-3">Rút tiền</p>

        <form
          className="w-full max-w-xl"
          // onSubmit={handleSubmit(handlewithdrawRemain)}
        >
          <div className="flex flex-col gap-5">
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  // error={Boolean(errors.amount)}
                  // helperText={errors.amount?.message || ""}
                  // InputProps={{
                  //   inputComponent: CurrencyNumericFormat,
                  //   endAdornment: (
                  //     <InputAdornment position="end">NOWp</InputAdornment>
                  //   ),
                  // }}
                  label="Số tiền"
                />
              )}
            />

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
                  label="2FA"
                />
              )}
            />
          </div>
          <button
            //   disabled={loadingWithdraw}
            type="submit"
            className={`flex justify-center !bg-gradient-dark-pink items-center mt-5 disabled:opacity-50 disabled:-translate-y-0 w-full h-[50px]  rounded-lg mx-auto text-white hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
          >
            <span className="text-sm text-white block">Rút tiền</span>
            {/* {loadingWithdraw && (
            <span className="w-5" style={{ transform: "scale(0.3)" }}>
              <LoaderStyleOne />
            </span>
          )} */}
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
};
