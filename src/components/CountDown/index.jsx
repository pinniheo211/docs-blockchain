import { formatNumber } from "@/until/format";
import Countdown from "react-countdown";
const Completionist = ({ raised }) => {
  return (
    <div className="font-semibold">
      RAISED:
      <span className="font-bold pl-1">{formatNumber(raised)} NOWC</span>
    </div>
  );
};

const CountdownComponent = ({ startDate, raised }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist raised={raised} />;
    } else {
      return (
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-1 justify-center items-center relative">
            <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-gradient-toearnnow rounded-lg">
              <span className="text-2xl w-full text-center font-semibold text-[#a5b4fc]">
                {days}
              </span>
            </div>
            <span className="text-white text-xs text-center capitalize">
              {days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center relative">
            <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-gradient-toearnnow rounded-lg">
              <span className="text-2xl w-full text-center font-semibold text-[#a5b4fc]">
                {hours}
              </span>
            </div>
            <span className="text-white text-xs text-center font-medium">
              {hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center relative">
            <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-gradient-toearnnow rounded-lg">
              <span className="text-2xl w-full text-center font-semibold text-[#a5b4fc]">
                {minutes}
              </span>
            </div>
            <span className="text-white text-xs text-center capitalize">
              {minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center relative">
            <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-gradient-toearnnow rounded-lg">
              <span className="text-2xl w-full text-center font-semibold text-[#a5b4fc]">
                {seconds}
              </span>
            </div>
            <span className="text-white text-xs text-center capitalize">
              {seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      );
    }
  };
  return <Countdown date={startDate} renderer={renderer} />;
};

export default CountdownComponent;
