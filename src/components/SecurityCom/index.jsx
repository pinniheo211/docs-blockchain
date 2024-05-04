import useCopy from "@/hooks/useCopy";
import { loginTheme } from "@/until/theme";
import { InputAdornment, TextField, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function SecurityCom() {
  const [is2FAEnabled, set2FAEnabled] = useState(false);

  const { copySuccess, onCopy } = useCopy();

  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      token: "",
    },
  });

  useEffect(() => {
    copySuccess && toast.success("Copied!");
  }, [copySuccess]);

  return (
    <ThemeProvider theme={loginTheme}>
      <div className="h-full rtl:lg:border-l rounded-lg border-[rgba(0, 0, 0, 0.1)] shadow rounded-lg p-4 md:p-7">
        <span className="font-semibold text-2xl text-qblacktext">
          Two-Factor Authentication (2FA)
        </span>

        <div>
          <div className="w-full flex justify-center text-center mt-10 !mx-0">
            {!is2FAEnabled ? (
              <form
                className=" w-full lg:w-2/5"
                //   onSubmit={handleSubmit(onSubmitForm)}
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <h2 className="text-lg font-bold mb-5">2FA</h2>
                  <Image
                    src={
                      "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                    }
                    alt=""
                    width={300}
                    height={300}
                  />

                  <p className="font-bold">Quét mã để lấy mã 2FA</p>
                  <div className="w-full my-3 flex gap-3 items-center">
                    <TextField
                      size="large"
                      fullWidth
                      label="Mã 2FA"
                      variant="filled"
                      disabled
                      value="ndawkjndjawndbabdbawkdkjawbd"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className="cursor-pointer"
                            onClick={() => onCopy(dataQR?.data?.code)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                              <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="flex w-full  flex-col items-center gap-10">
                    <Controller
                      name="token"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          size="large"
                          fullWidth
                          variant="filled"
                          //   error={Boolean(errors.token)}
                          //   helperText={errors.token?.message || ""}
                          placeholder="Mã 2FA"
                          resetField
                          InputProps={{
                            style: {
                              width: "100%",
                            },
                          }}
                        />
                      )}
                    />
                    <button
                      // disabled={press2FALoading}
                      type="submit"
                      className={` flex justify-center items-center disabled:opacity-50 disabled:-translate-y-0 w-full h-[50px] !bg-gradient-dark-pink rounded-lg mx-auto text-white hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
                    >
                      <span className="text-sm text-white block">Bật 2FA</span>
                      {/* {press2FALoading && (
                        <span
                          className="w-5"
                          style={{ transform: "scale(0.3)" }}
                        >
                          <LoaderStyleOne />
                        </span>
                      )} */}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="w-full flex justify-center text-center mt-10">
                <form
                  //   onSubmit={handleSubmit(handleDisable)}
                  className="w-full flex flex-col items-center justify-center lg:w-2/5"
                >
                  <h2 className="text-lg font-bold mb-5">Bạn đã bật 2FA</h2>
                  <Image
                    src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                    alt=""
                    width="300"
                    height="300"
                  />
                  <div className="flex w-full mt-10 flex-col items-center gap-10">
                    <Controller
                      name="token"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          //   error={Boolean(errors.token)}
                          //   helperText={errors.token?.message || ""}
                          placeholder="Mã 2FA"
                          resetField
                          fullWidth
                          InputProps={{
                            style: {
                              width: "100%",
                            },
                          }}
                        />
                      )}
                    />
                    <button
                      type="submit"
                      className={` flex justify-center items-center disabled:opacity-50 disabled:-translate-y-0 w-full h-[50px] !bg-gradient-dark-pink rounded-lg mx-auto text-white hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
                    >
                      <span className="text-sm text-white block">Tắt 2FA</span>
                      {/* {off2FALoading && (
                        <span
                          className="w-5"
                          style={{ transform: "scale(0.3)" }}
                        >
                          <LoaderStyleOne />
                        </span>
                      )} */}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
