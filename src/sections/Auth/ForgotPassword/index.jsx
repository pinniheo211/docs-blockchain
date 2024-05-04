import LoaderStyleOne from "@/components/LoaderStyleOne";
import { actionForgot, actionResetPass } from "@/store/auth";
import { SCHEMA_FORGOT, SCHEMA_RESET_PASS } from "@/until/schema";
import { loginTheme } from "@/until/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
export default function ForgotPass() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [forgotUser, setForgotUser] = useState(true);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth.forgot);
  const { loading: loadingResetPass } = useSelector(
    (state) => state.auth.resetPass
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: forgotUser
      ? { email: "" }
      : { code: "", password: "", cpassword: "" },
    resolver: forgotUser
      ? yupResolver(SCHEMA_FORGOT)
      : yupResolver(SCHEMA_RESET_PASS),
  });
  const onSubmit = (data) => {
    delete data.cpassword;
    forgotUser
      ? dispatch(actionForgot(data)).then((res) => {
          if (!res.payload.error) {
            setEmail(data);
            reset();
            setForgotUser(false);
          }
        })
      : dispatch(actionResetPass({ ...data, ...email })).then((res) => {
          if (!res.payload.error) {
            reset();
            setTimeout(() => {
              router.push("/login");
            }, 2000);
          }
        });
  };
  return (
    <ThemeProvider theme={loginTheme}>
      <section className="relative h-screen overflow-hidden flex items-center">
        <div
          className="-z-1 w-full h-screen absolute left-[10%] top-0 bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>

        <div className="container flex items-center justify-center">
          <div className="bg-gradient-toearnnow bg-opacity-45 shadow rounded-xl flex w-full max-w-5xl items-center justify-center p-4 md:px-8 md:py-8 mx-auto gap-5 md:gap-7">
            <div className="hidden md:block w-[45%]">
              <Image
                src="/assets/images/iconLogin.png"
                width={430}
                height={330}
                alt="Icon Login"
              />
            </div>
            {forgotUser ? (
              <div className="w-full md:w-[55%] md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
                <Image
                  src="/Layer_1-2.png"
                  width={300}
                  height={44}
                  alt="Icon Login"
                />
                <div className="p-3 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                    Forgot Password
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="input-area"
                  >
                    <p className="text-center  mb-3">
                      Enter email to change password
                    </p>
                    <div className="input-item mb-5">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            variant="filled"
                            label="Email"
                            type="email"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message || ""}
                            fullWidth
                          />
                        )}
                      />
                    </div>

                    <div className="signin-area mb-3.5">
                      <div className="flex justify-center">
                        <button
                          disabled={loading}
                          type="submit"
                          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                        >
                          <span>Send</span>
                          {loading && (
                            <span
                              className="w-5 "
                              style={{ transform: "scale(0.3)" }}
                            >
                              <LoaderStyleOne />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="w-full md:w-[55%] md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
                <Image
                  src="/Layer_1-2.png"
                  width={300}
                  height={44}
                  alt="Icon Login"
                />
                <div className="p-3 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                    Change Password
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="input-area"
                  >
                    <div className="input-area">
                      <div className="input-item mb-3">
                        <Controller
                          name="code"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label="Code"
                              type="number"
                              error={Boolean(errors.code)}
                              helperText={errors.code?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                      <div className="input-item mb-3">
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label="Password"
                              type="password"
                              error={Boolean(errors.password)}
                              helperText={errors.password?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                      <div className="input-item mb-3">
                        <Controller
                          name="cpassword"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label={`Confirm Password`}
                              type="password"
                              error={Boolean(errors.cpassword)}
                              helperText={errors.cpassword?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="signin-area mb-3.5">
                      <div className="flex justify-center">
                        <button
                          disabled={loadingResetPass}
                          type="submit"
                          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                        >
                          <span>Change Password</span>
                          {loadingResetPass && (
                            <span
                              className="w-5 "
                              style={{ transform: "scale(0.3)" }}
                            >
                              <LoaderStyleOne />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
