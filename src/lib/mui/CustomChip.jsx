// ** MUI Imports
import UseBgColor from "@/until/useBgColor";
import MuiChip from "@mui/material/Chip";

// ** Third Party Imports
import clsx from "clsx";

const CustomChip = (props) => {
  // ** Props
  const { sx, skin, color } = props;

  // ** Hook
  const bgColors = UseBgColor();

  const colors = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight },
  };
  const propsToPass = { ...props };
  propsToPass.rounded = undefined;

  return (
    <MuiChip
      {...propsToPass}
      variant="filled"
      className={`${clsx({
        "MuiChip-light": skin === "light",
      })} rounded-sm !px-1.5 font-medium !py-2`}
      sx={skin === "light" && color ? Object.assign(colors[color], sx) : sx}
    />
  );
};

export default CustomChip;
