import { PATHS } from "@/routes";
import { actionGetVerifyMail, actionVerifyMail } from "@/store/auth";
import { loginTheme } from "@/until/theme";
import { ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
function VerifyAccountComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("token");
  const dispatch = useDispatch();
  const [verify, setVerify] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const { data, loading } = useSelector((state) => state.auth.verifyMail);
  useEffect(() => {
    if (search)
      dispatch(actionVerifyMail({ token: search })).then((res) => {
        if (!res.payload.error) {
          const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
          setTimeout(() => {
            clearInterval(interval);
            router.push("/login");
          }, 10000);
        } else {
          setVerify(true);
        }
      });
  }, [dispatch, router]);

  const handleModalResend = () => {
    dispatch(actionGetVerifyMail({ email: search })).then((res) => {
      if (!res.payload.error) {
        toast.success(
          "Verification email sent successfully, please check your email."
        );
      } else {
        setVerify(true);
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
            <div className="w-full md:w-[55%] md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
              <Image
                src="/Layer_1-2.png"
                width={300}
                height={44}
                alt="Icon Login"
              />
              <div className="p-3 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Verrify account
                </h1>
                {!verify ? (
                  <div className="flex items-center justify-center gap-4 flex-col">
                    {/* <Image
                          width={250}
                          height={250}
                          src={`/assets/images/checkSuccess.png`}
                          alt="checkSuccess"
                        /> */}
                    <p className="text-center">
                      You have successfully authenticated your account, the
                      system will automatically page transition after{" "}
                      {countdown} seconds. Or click button below to login.
                    </p>
                    <button
                      type="button"
                      className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                    >
                      <Link href={PATHS.LOGIN}>Sign in</Link>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4 flex-col">
                    {/* <Image
                          width={250}
                          height={250}
                          src={`/assets/images/checkFaild.png`}
                          alt="checkFaild"
                        /> */}
                    <p>
                      Authentication failed. If you have not received a
                      confirmation email really please
                      <span
                        className="text-primary-4 underline cursor-pointer font-bold"
                        onClick={() => handleModalResend()}
                      >
                        {" "}
                        resend
                      </span>{" "}
                      authentication email.
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

export default VerifyAccountComponent;
