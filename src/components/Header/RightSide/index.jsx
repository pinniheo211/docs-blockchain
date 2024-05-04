"use client";
import { PATHS } from "@/routes";
import auth from "@/until/auth";
import Link from "next/link";
import { DivWrapper, Login, Register, RightSide } from "./styles";
import { connectWallet } from "@/until/web3";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { formatAddress } from "@/until/format";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ThemeProvider,
} from "@mui/material";
import { ThemeConnectWallet, ThemeMdx } from "@/lib/mui/custom-theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = (props) => {
  const isAuth = auth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { data: userInfo } = useSelector((state) => state.profile.userInfo);

  const handleConnect = () => {
    connectWallet(dispatch, userInfo, searchParams, router);
  };
  return (
    <RightSide>
      <DivWrapper>
        {/* <div className="relative block w-36 h-12">
          <ThemeProvider theme={ThemeConnectWallet}>
            <Accordion
              color="primary"
              sx={{ position: "absolute", top: 0, left: 0 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <button onClick={handleConnect}>
                  {userInfo
                    ? formatAddress(userInfo?.address)
                    : "Connect wallet"}
                </button>
              </AccordionSummary>
              <AccordionDetails>
                <button>dashboard</button>
                <button>disconnect</button>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div> */}
        <Register>
          <button onClick={handleConnect}>
            {/* {userInfo ? formatAddress(userInfo?.address) : "Connect wallet"} */}
            {userInfo ? "Disconnect" : "Connect wallet"}
          </button>
        </Register>
        {isAuth && userInfo && (
          <Register>
            <Link href={PATHS.DASHBOARD}>Dashboard</Link>
          </Register>
        )}
      </DivWrapper>
    </RightSide>
  );
};

export default Header;
