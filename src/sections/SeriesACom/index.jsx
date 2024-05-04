import logoCoin from "@/assets/icon/logoToken.png";
import logoCoinLock from "@/assets/icon/logoTokenLock.png";
import "react-circular-progressbar/dist/styles.css";
import { FormControlLabel, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { OverView } from "./OverView";
import { TopFund } from "./TopFund";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeMdx } from "@/lib/mui/custom-theme.js";
import CountdownComponent from "@/components/CountDown";
import dynamic from "next/dynamic";
export const SeriesACom = () => {
  const RadialBarChart = dynamic(() => import("./Circle"));

  return (
    <div className="relative my-10 max-h-[600px] flex gap-20 lg:flex-row flex-col">
      <div
        className="-z-1 w-full h-screen absolute -right-[10px] top-[30%] bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer-three.png)`,
        }}
      ></div>
      <div
        className="-z-1 w-full h-screen absolute -right-[10px] top-0 bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer.png)`,
        }}
      ></div>
      <div className="lg:w-2/5 w-full">
        <h1 className="text-white text-xl font-semibold">
          Participants: <span className="text-pink">100 people</span>
        </h1>
        <div>
          <RadialBarChart />
        </div>
        <div>
          <CountdownComponent />
        </div>
        <div className="bg-black mt-10 px-3  rounded-lg">
          <ThemeProvider theme={ThemeMdx}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-lg font-bold text-white">Policy</p>
              </AccordionSummary>
              <AccordionDetails
                style={{ maxHeight: "500px", overflow: "scroll" }}
              >
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-semibold"> SeriesA</p>
                  <div>
                    <p className="text-lg font-semibold">15%</p>
                    <p className="text-lg font-semibold">150,000,000</p>
                    <p>
                      0% at TGE, Cliff 6 months, linear distribution monthly
                      100% in 18 months
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">IDO Public </p>
                    <p className="text-lg font-semibold">5% </p>
                    <p className="text-lg font-semibold">50,000,000 </p>

                    <p> Distribution 100% at listing</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Advisor </p>
                    <p className="text-lg font-semibold">8.5% </p>
                    <p className="text-lg font-semibold">85,000,000 </p>
                    <p>
                      TGE 0%, Cliff 12 months, linear distribution monthly 100%
                      in 36 months
                    </p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className="bg-black mt-10 px-3  rounded-lg">
          <ThemeProvider theme={ThemeMdx}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-lg font-bold text-white">Description</p>
              </AccordionSummary>
              <AccordionDetails
                style={{ maxHeight: "500px", overflow: "scroll" }}
              >
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-semibold"> SeriesA</p>
                  <div>
                    <p className="text-lg font-semibold">15%</p>
                    <p className="text-lg font-semibold">150,000,000</p>
                    <p>
                      0% at TGE, Cliff 6 months, linear distribution monthly
                      100% in 18 months
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">IDO Public </p>
                    <p className="text-lg font-semibold">5% </p>
                    <p className="text-lg font-semibold">50,000,000 </p>

                    <p> Distribution 100% at listing</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Advisor </p>
                    <p className="text-lg font-semibold">8.5% </p>
                    <p className="text-lg font-semibold">85,000,000 </p>
                    <p>
                      TGE 0%, Cliff 12 months, linear distribution monthly 100%
                      in 36 months
                    </p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
      </div>

      <div className="lg:w-3/5  w-full">
        <div className="sm:mx-10 lg:mx-0">
          <TopFund />
          <div className="flex w-full flex-col gap-10 mt-10">
            <OverView
              title="Sold"
              desc="20,000,000.0 NOWc "
              subTitle="Remaining"
              subDesc="20,000,000.0 NOWc"
              logoCoin={logoCoin}
            />
            <OverView
              title="Total"
              logoCoin={logoCoin}
              desc="40,000,000.0 NOWc"
            />

            <OverView
              title="Months_locked"
              logoCoin={logoCoinLock}
              desc="6 Month"
              subTitle="Percent_unlock"
              subDesc="5%"
            />
          </div>
          <div className="flex items-center my-5">
            <FormControlLabel
              sx={{
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "#fff",
                },
                "&.Mui-checked .MuiSvgIcon-root": {
                  color: "#fff",
                },
              }}
              control={<Checkbox />}
              label="Agree to Toearnow's terms and conditions"
            />
          </div>
          <div className="w-full text-center">
            <button className="sm:w-[250px] w-full mb-3  py-3 w-full text-sm rounded-full text-white bg-gradient-dark-pink">
              JOIN
            </button>
            <p className="text-white text-sm">
              Joining this Fund will cost $10 one time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
