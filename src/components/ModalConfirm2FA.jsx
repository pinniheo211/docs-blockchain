import { yupResolver } from "@hookform/resolvers/yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

import { TextField } from "@mui/material";

export default function ModalConfirm2FA({ open, setOpen, handleVerify }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const key = JSON.parse(localStorage.getItem("auth")) || "";

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      token: null,
      //   key: key?.key,
    },
  });

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    handleVerify(data);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="xs"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="alert-dialog-title">Xác thực 2FA</DialogTitle>
          <DialogContent>
            <div className="pt-2">
              <Controller
                name="token"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mã 2FA"
                    // error={Boolean(errors.token)}
                    // helperText={errors.token?.message || ""}
                    placeholder="Mã 2FA"
                    resetField
                    fullWidth
                  />
                )}
              />
            </div>

            {/* <p className="text-sm font-normal text-[#ccc]">code authencation</p> */}
          </DialogContent>

          <DialogActions>
            <div className="flex gap-3">
              <button
                type="button"
                className={`border-qred border flex px-5 py-1.5 justify-center items-center disabled:opacity-50 disabled:-translate-y-0 h-[50px] rounded-lg mx-auto text-qred hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
                onClick={handleClose}
              >
                <span className="text-sm block">Huỷ</span>
              </button>
              <button
                type="submit"
                className={` flex justify-center items-center  px-5 py-1.5  disabled:opacity-50 disabled:-translate-y-0 h-[50px] !bg-gradient-dark-pink rounded-lg mx-auto hover:-translate-y-1 transition-all duration-300 text-base font-bold`}
              >
                <span className="text-sm text-white">Gửi</span>

                {/* {loading && (
                  <span className="w-5 " style={{ transform: "scale(0.3)" }}>
                    <LoaderStyleOne />
                  </span>
                )} */}
              </button>
            </div>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
