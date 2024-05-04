// import { yupResolver } from "@hookform/resolvers/yup";
// import ReCAPTCHA from "react-google-recaptcha";

// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { SCHEMA_LOGIN } from "@/until/schema";
// import { useDispatch, useSelector } from "react-redux";
// import { actionGetProfile, actionLogin } from "@/store/auth";
// import { TextField, ThemeProvider } from "@mui/material";
// import Image from "next/image";
// import { loginTheme } from "@/until/theme";
// import LoaderStyleOne from "@/components/LoaderStyleOne";
// import { useRouter } from "next/navigation";
// import isAuth from "@/middleware/isAuth";

// const LoginComponent = () => {
//   const dispatch = useDispatch();
//   const [checkRecaptcha, setCheckRecaptcha] = useState(false);
//   const { loading } = useSelector((state) => state.auth.login);
//   const router = useRouter();

//   const doRepcatcha = (token) => {
//     if (token) {
//       setCheckRecaptcha(true);
//     } else {
//       setCheckRecaptcha(false);
//     }
//   };

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       username: "",
//       password: "",
//     },
//     resolver: yupResolver(SCHEMA_LOGIN),
//   });

//   const onSubmit = (data) => {
//     dispatch(actionLogin(data)).then((res) => {
//       if (res.payload.username) {
//         dispatch(actionGetProfile());
//         localStorage.setItem("access_token", res?.payload?.sessionID);
//         localStorage.setItem("auth", JSON.stringify(res?.payload));
//         router.push("/dashboard");
//       }
//     });
//   };
//   return (
//     <ThemeProvider theme={loginTheme}>
//       <section className="relative h-screen overflow-hidden flex items-center">
//         <div
//           className="-z-1 w-full h-screen absolute left-[10%] top-0 bg-no-repeat"
//           style={{
//             backgroundImage: `url(../../assets/images/layer-three.png)`,
//           }}
//         ></div>
//         <div className="container flex items-center justify-center">
//           <div className="bg-gradient-toearnnow bg-opacity-45 shadow rounded-xl flex w-full max-w-5xl items-center justify-center p-3 md:px-6 md:py-8 mx-auto gap-5">
//             <div className="hidden md:block">
//               <Image
//                 src="/assets/images/iconLogin.png"
//                 width={500}
//                 height={500}
//                 alt="Icon Login"
//               />
//             </div>
//             <div className="w-full md:mt-0 sm:max-w-lg py-6 flex items-center justify-center flex-col">
//               <Image
//                 src="/Layer_1-2.png"
//                 width={300}
//                 height={150}
//                 alt="Icon Login"
//               />
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8 sm:pt-4 w-full">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
//                   Sign in to your account
//                 </h1>
//                 <form
//                   onSubmit={handleSubmit(onSubmit)}
//                   className="flex flex-col gap-5"
//                 >
//                   <div>
//                     <div className="h-full text-white">
//                       <Controller
//                         name="username"
//                         control={control}
//                         render={({ field }) => (
//                           <TextField
//                             {...field}
//                             variant="standard"
//                             label="Username"
//                             error={Boolean(errors.username)}
//                             helperText={errors.username?.message || ""}
//                             placeholder="Username"
//                             resetField
//                             fullWidth
//                           />
//                         )}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="h-full text-white">
//                       <Controller
//                         name="password"
//                         control={control}
//                         render={({ field }) => (
//                           <TextField
//                             {...field}
//                             variant="standard"
//                             label="Password"
//                             type="password"
//                             error={Boolean(errors.password)}
//                             helperText={errors.password?.message || ""}
//                             placeholder="Password"
//                             resetField
//                             fullWidth
//                           />
//                         )}
//                       />
//                     </div>
//                   </div>
//                   <ReCAPTCHA
//                     sitekey="6LfnnBYpAAAAAC0jBlADpla9bSR6chVGI6mHKBXu"
//                     onChange={async (token) => {
//                       doRepcatcha(token);
//                     }}
//                     onExpired={(e) => {}}
//                   />
//                   <div className="flex justify-center flex-col">
//                     <button
//                       disabled={!checkRecaptcha || loading}
//                       type="submit"
//                       className="disabled:opacity-50 disabled:cursor-not-allowed disabled:-translate-y-0 !bg-gradient-dark-pink hover:-translate-y-1 duration-300 transition-all rounded-lg text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
//                     >
//                       <span> Sign in</span>
//                       {loading && (
//                         <span
//                           className="w-5"
//                           style={{ transform: "scale(0.3)" }}
//                         >
//                           <LoaderStyleOne />
//                         </span>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </ThemeProvider>
//   );
// };

// export default isAuth(LoginComponent);
