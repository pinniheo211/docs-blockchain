import iconFund from "@/assets/icon/iconFund.svg";
import { SeriesACom } from "@/sections/SeriesACom";
import { formatNumber } from "@/until/format";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import CountdownComponent from "../CountDown";
import { distributeSeriesPercentage } from "./helper";
export const Fund = ({ data }) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 13,
    borderRadius: 10,
    "&.MuiLinearProgress-root": {
      backgroundColor:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)",
    },
    "& .MuiLinearProgress-bar": {
      background: "linear-gradient(90deg, #542C9E 0%, #EB0174 100%)",
    },
  }));
  const StyledAvatar = styled(Avatar)({
    width: "30px",
    height: "30px",
  });

  const StyledAvatarGroup = styled(AvatarGroup)({
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
      fontSize: "14px",
    },
  });

  return (
    <div
      className={`w-full p-3 md:p-5 rounded-xl ${
        !data?.active && "!border-[#aca6ba]"
      } border-[1px] flex flex-col gap-3 md:gap-4 relative overflow-hidden`}
    >
      {!data?.active && (
        <div className="absolute left-0 top-0 bg- w-full h-full z-20 bg-[#999999ad] flex items-center justify-center">
          <Image
            src="/assets/images/lockFund.svg"
            width={60}
            height={60}
            alt="Icon Fund"
          />
        </div>
      )}
      <div className="flex pl-5 md:pl-6 p-2 md:p-3 justify-between rounded-lg bg-transparent items-center relative overflow-hidden">
        <h1 className="text-white text-xl md:text-2xl font-semibold">
          {data?.name}
        </h1>
        <Image src={iconFund} width={40} height={40} alt="Icon Fund" />
        <div className="absolute h-full w-3 bg-pink top-0 left-0"></div>
      </div>
      <div>
        <BorderLinearProgress
          variant="determinate"
          value={distributeSeriesPercentage(data?.total_sold, data?.total_sale)}
        />
        <div className="flex justify-between pt-1">
          <p className="text-white text-xs sm:text-sm">
            {formatNumber(data?.total_sold)} NOWC Received
          </p>
          <p className="text-white text-xs sm:text-sm">
            {formatNumber(data?.total_sale)} NOWC
          </p>
        </div>
      </div>
      <p className="text-white font-semibold text-base">
        Participants: {data?.user_count} people
      </p>
      <div className="flex justify-between sm:flex-row flex-col gap-3 flex-wrap">
        <div className="flex gap-4 items-center sm:flex-row flex-col">
          <CountdownComponent
            startDate={data?.start_date}
            endDate={data?.end_date}
            raised={data?.total_sold}
          />
          <StyledAvatarGroup max={4}>
            <StyledAvatar src="/" />
            <StyledAvatar src="/" />
            <StyledAvatar src="/" />
            <StyledAvatar src="/" />
            <StyledAvatar src="/" />
          </StyledAvatarGroup>
        </div>
        {data?.total_sold === data?.total_sale ? (
          <button className="block h-min my-auto ml-auto w-max cursor-pointer relative font-bold duration-300 text-white px-6 py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 xl:px-8 xl:py-2.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
            Complete
          </button>
        ) : (
          <button
            // onClick={handleClickOpen}
            className="block h-min my-auto ml-auto w-max cursor-pointer relative font-bold duration-300 text-white px-6 py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 xl:px-8 xl:py-2.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full"
          >
            More Info
          </button>
        )}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth="xl"
          PaperProps={{
            style: {
              background:
                "linear-gradient(180deg, #502D9F 0%, rgba(0, 0, 0, 0) 100%)",
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle>
            <p className="text-white text-2xl font-semibold">Series A</p>
          </DialogTitle>

          <DialogContent dividers>
            <SeriesACom />
          </DialogContent>
        </BootstrapDialog>
      </div>
    </div>
  );
};
