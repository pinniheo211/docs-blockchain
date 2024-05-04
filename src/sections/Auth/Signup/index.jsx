import LoaderStyleOne from "@/components/LoaderStyleOne";
import { PATHS } from "@/routes";
import { actionRegister } from "@/store/auth";
import { SCHEMA_REGISTER } from "@/until/schema";
import { loginTheme } from "@/until/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function SignupWidget() {
  const dispatch = useDispatch();
  const router = useParams();
  const referral = router?.query?.gioithieu ?? "";
  const { loading, data } = useSelector((state) => state.auth.register);
  const [verify, setVerify] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
      ref: "",
    },
    resolver: yupResolver(SCHEMA_REGISTER),
  });

  const onSubmit = (data) => {
    delete data.cpassword;
    dispatch(actionRegister(data)).then((res) => {
      if (!res.payload.error) {
        reset();
        setVerify(true);
      }
    });
  };

  useEffect(() => {
    if (referral) {
      setValue("ref", referral);
    }
  }, [router]);

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
            <div className="w-full md:w-[55%] md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
              <Image
                src="/Layer_1-2.png"
                width={300}
                height={44}
                alt="Icon Login"
              />
              <div className="p-3 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Sign up to your account
                </h1>
                {!verify ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="input-area w-full"
                  >
                    <div className="input-item mb-3.5">
                      <div className="h-full">
                        <Controller
                          name="username"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label="Username"
                              type="text"
                              error={Boolean(errors.username)}
                              helperText={errors.username?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="input-item mb-3.5">
                      <div className="h-full">
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
                    </div>
                    <div className="flex sm:flex-row items-start flex-col space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse mb-3.5">
                      <div className="h-full w-full">
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
                      <div className="h-full w-full">
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

                    <div className="input-item mb-3.5">
                      <div className="h-full">
                        <Controller
                          name="ref"
                          control={control}
                          disabled={Boolean(referral)}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label={`Referral`}
                              type="text"
                              error={Boolean(errors.ref)}
                              helperText={errors.ref?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="signin-area mb-3 mt-5">
                      <div className="flex justify-center">
                        <button
                          disabled={loading}
                          type="submit"
                          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                        >
                          <span> Sign up</span>
                          {loading && (
                            <span
                              className="w-5"
                              style={{ transform: "scale(0.3)" }}
                            >
                              <LoaderStyleOne />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="signup-area flex justify-center">
                      <div className="text-base text-qgraytwo font-normal">
                        Do you already have an account?
                        <Link href={PATHS.LOGIN}>
                          <span className="ml-2 text-primary-4 cursor-pointer hover:underline">
                            Sign in
                          </span>
                        </Link>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-4 flex-col">
                    {/* <Image
                      width={250}
                      height={250}
                      src={`/assets/images/checkSuccess.png`}
                      alt="login"
                    /> */}
                    <p className="text-center">
                      You have successfully registered for an account, please
                      check your email to confirm real account.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SignupWidget;
