import LoaderStyleOne from "@/components/LoaderStyleOne";
import { PATHS } from "@/routes";
import { actionGetVerifyMail, actionLogin } from "@/store/auth";
import { actionGetProfile } from "@/store/profile";
import { SCHEMA_LOGIN, SCHEMA_VERIFY_EMAIL } from "@/until/schema";
import { loginTheme } from "@/until/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, TextField, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
function LoginWidget() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkVerify, setCheckVerify] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const { data, loading } = useSelector((state) => state.auth.login);

  const [checkRecaptcha, setCheckRecaptcha] = useState(false);

  const doRepcatcha = (token) => {
    if (token) {
      setCheckRecaptcha(true);
    } else {
      setCheckRecaptcha(false);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
    resolver: yupResolver(SCHEMA_LOGIN),
  });

  const onSubmit = (data) => {
    dispatch(actionLogin(data)).then((res) => {
      if (res.payload?.data?.type === "VERIFY") {
        setIsVerify(true);
      } else if (res?.payload?.userData) {
        dispatch(actionGetProfile());
        router.push("/dashboard");
      }
    });
  };

  const handleVerfify = () => {
    setCheckVerify(true);
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
          <div className="bg-gradient-toearnnow bg-opacity-45 shadow rounded-xl flex w-full max-w-5xl items-center justify-center p-3 md:px-6 md:py-8 mx-auto gap-5 md:gap-7">
            <div className="hidden md:block">
              <Image
                src="/assets/images/iconLogin.png"
                width={430}
                height={330}
                alt="Icon Login"
              />
            </div>
            {!checkVerify ? (
              <div className="w-full md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
                <Image
                  src="/Layer_1-2.png"
                  width={300}
                  height={44}
                  alt="Icon Login"
                />
                <div className="p-3 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                    Sign in to your account
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <div className="h-full text-white">
                        <Controller
                          name="usernameOrEmail"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="filled"
                              label="Username or Email"
                              error={Boolean(errors.usernameOrEmail)}
                              helperText={errors.usernameOrEmail?.message || ""}
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="h-full text-white">
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
                    </div>
                    <div className="min-h-20">
                      <ReCAPTCHA
                        sitekey="6LfnnBYpAAAAAC0jBlADpla9bSR6chVGI6mHKBXu"
                        onChange={async (token) => {
                          doRepcatcha(token);
                        }}
                        onExpired={(e) => {}}
                      />
                    </div>
                    <div className="flex justify-center flex-col gap-1">
                      <button
                        disabled={!checkRecaptcha || loading}
                        type="submit"
                        className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                      >
                        <span> Sign in</span>
                        {loading && (
                          <span
                            className="w-5"
                            style={{ transform: "scale(0.3)" }}
                          >
                            <LoaderStyleOne />
                          </span>
                        )}
                      </button>
                      <div
                        className={`${
                          !isVerify ? "justify-start" : "justify-between"
                        } flex items-center`}
                      >
                        <Link href={PATHS.FORGOT_PASSWORD}>
                          <span className="ml-2 text-primary-4 text-sm hover:underline cursor-pointer">
                            Forgot password?
                          </span>
                        </Link>
                        {isVerify && (
                          <span
                            onClick={() => handleVerfify()}
                            className="ml-2 text-primary-4 text-sm hover:underline cursor-pointer"
                          >
                            Verify account
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="signup-area flex justify-center">
                      <p className="text-base text-qgraytwo font-normal">
                        Do not have an account?
                        <button type="button">
                          <Link href={PATHS.REGISTER}>
                            <span className="ml-2 text-primary-4 hover:underline cursor-pointer capitalize">
                              Sign up
                            </span>
                          </Link>
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <VerifyLoginWidget />
            )}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default LoginWidget;

function VerifyLoginWidget() {
  const dispatch = useDispatch();
  const [verify, setVerify] = useState(false);
  const { data: dataGetVerifyMail, loading: loadingGetVerifyMail } =
    useSelector((state) => state.auth.getVerifyMail);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(SCHEMA_VERIFY_EMAIL),
  });

  const onSubmit = (data) => {
    dispatch(actionGetVerifyMail(data)).then((res) => {
      if (!res.payload?.error) {
        reset();
        setVerify(true);
      }
    });
  };

  return (
    <div className="w-full md:mt-0 sm:max-w-lg p-6 sm:p-8 flex items-center justify-center flex-col">
      <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
        <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
          Verify account
        </h1>
        <div className="shape -mt-6">
          <svg
            width="354"
            height="30"
            viewBox="0 0 354 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
              stroke="#F40074"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {!verify ? (
        <form onSubmit={handleSubmit(onSubmit)} className="input-area">
          <p className="text-center mb-3">
            You have not verified your account, if you have not received a
            confirmation code from email, enter your email and receive a code
            for authentication.
          </p>
          <div className="input-item mb-5">
            <div className="h-full">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    label="Email"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message || ""}
                    fullWidth
                  />
                )}
              />
              {errors && errors?.email?.message ? (
                <span className="text-xs mt-1 text-qred">
                  {errors?.email?.message}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="signin-area mb-3">
            <div className="flex justify-center">
              <button
                type="type"
                className="disabled:opacity-50 disabled:-translate-y-0 bg-primary-4 hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
              >
                <span className="text-sm text-white block">Get code</span>
                {loadingGetVerifyMail && (
                  <span className="w-5 " style={{ transform: "scale(0.3)" }}>
                    <LoaderStyleOne />
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center gap-4 flex-col">
          {/* <Image
            width={250}
            height={250}
            src={`/assets/images/checkSuccess.png`}
            alt="checkSuccess"
          /> */}
          <p className="text-center">
            You have successfully sent email confirmation. Please check your
            email.
          </p>
        </div>
      )}
    </div>
  );
}
