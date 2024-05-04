import { Fund } from "@/components/FundComponent";
import { ThemeMdx } from "@/lib/mui/custom-theme.js";
import { actionGetListFund } from "@/store/dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ThemeProvider } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const DynamicApexDonutChart = dynamic(() => import("./ApexDonutChart"));
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FundSkeleton } from "@/components/skeleton/FundSkeleton";

const Overview = () => {
  const dispatch = useDispatch();
  const { data: dataListFund, loading: loadingListFund } = useSelector(
    (state) => state.dashboard.dashboard
  );

  useEffect(() => {
    dispatch(actionGetListFund());
  }, []);

  const listFund = dataListFund?.data?.rows || [];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div
        className="-z-1 w-full min-h-screen absolute left-[10%] top-[30%] bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer-three.png)`,
        }}
      ></div>
      <div
        className="-z-1 w-full min-h-screen absolute left-0 top-0 bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer.png)`,
        }}
      ></div>
      {loadingListFund ? (
        <FundSkeleton />
      ) : (
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
              <p className="text-4xl font-semibold">Fundraising</p>
              <div className="bg-gradient-toearnnow flex flex-col p-5 rounded-lg gap-5">
                <div className="bg-line p-3 rounded-lg font-bold">Series A</div>
                <div className="flex flex-col gap-7 shadow">
                  {listFund?.map((data, index) => (
                    <Fund key={index} data={data} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <p className="text-4xl font-semibold">Tokenomics</p>
              <div className="bg-gradient-toearnnow flex flex-col p-5 rounded-lg gap-5">
                {/* <ThemeProvider theme={loginTheme}> */}
                <DynamicApexDonutChart />
                {/* </ThemeProvider> */}
              </div>
              <div className="bg-gradient-toearnnow px-3 py-1.5 rounded-lg">
                <ThemeProvider theme={ThemeMdx}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <p className="text-lg font-bold text-white">Note</p>
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
                            0% at TGE, Cliff 6 months, linear distribution
                            monthly 100% in 18 months
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
                            TGE 0%, Cliff 12 months, linear distribution monthly
                            100% in 36 months
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Team </p>
                          <p className="text-lg font-semibold">10%</p>
                          <p className="text-lg font-semibold">100,000,000 </p>

                          <p>
                            TGE 0% Cliff 12 months, linear distribution monthly
                            100% in 36 months
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">
                            Ecosystem/Community{" "}
                          </p>
                          <p className="text-lg font-semibold">18%</p>
                          <p className="text-lg font-semibold">180,000,000 </p>
                          <p>25% at TGE, linear vest 48 months</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Airdrop </p>
                          <p className="text-lg font-semibold"> 1.5%</p>
                          <p className="text-lg font-semibold">15,000,000</p>
                          <p>
                            TGE 0%, Cliff 3 months, distribution 100% in 3 month
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Launch pool </p>
                          <p className="text-lg font-semibold"> 3%</p>
                          <p className="text-lg font-semibold">30,000,000</p>
                          <p> 100% at TGE</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Lab </p>
                          <p className="text-lg font-semibold"> 4%</p>
                          <p className="text-lg font-semibold">40,000,000</p>
                          <p>
                            TGE 15%, Cliff 12 months, linear distribution
                            monthly 85% in 36 months
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Strategic </p>
                          <p className="text-lg font-semibold"> 6.5%</p>
                          <p className="text-lg font-semibold">65,000,000</p>
                          <p>
                            TGE 0% Cliff 12 months, linear distribution monthly
                            100% in 36 months
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Foundation </p>
                          <p className="text-lg font-semibold"> 28.5%</p>
                          <p className="text-lg font-semibold">285,000,000</p>
                          <p> Linear vest</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Total</p>
                          <p>1,000,000,000</p>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export const fundData = [
  {
    title: "Opportunity NOW Group",
    received: 20000000,
    total: 40000000,
    people: 100,
  },
  {
    title: "Opportunity NOW Group",
    received: 10000000,
    total: 20000000,
    people: 100,
  },
  {
    title: "Opportunity NOW Group",
    received: 20000000,
    total: 40000000,
    people: 100,
  },
  {
    title: "Opportunity NOW Group",
    received: 20000000,
    total: 40000000,
    people: 100,
  },
];

export default Overview;
