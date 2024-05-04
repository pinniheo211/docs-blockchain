import {
  Box,
  Card,
  CardContent,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutDashboard from "../Dashboard";
import { actionGetCountry } from "@/store/address";
import { KYCProfileDetail } from "./KycProfile";

const KycComponent = () => {
  const dispatch = useDispatch();
  const [confirmKYC, setConfirmKYC] = useState(false);
  const { data: dataProfile } = useSelector(
    (state) => state.profile.getProfile
  );
  useEffect(() => {
    dispatch(actionGetCountry());
  }, []);

  return (
    <LayoutDashboard>
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
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4">Verification KYC</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={12} lg={12}>
                  {/* {(dataProfile?.kyc === null || confirmKYC === true) && ( */}
                  <KYCProfileDetail setConfirmKYC={setConfirmKYC} />
                  {/* )} */}
                  {/* {dataProfile?.kyc?.status === "APPROVE" && (
                    <Card className="p-2 max-w-xl mx-auto">
                      <CardContent sx={{ pt: 0 }}>
                        <div className="flex items-center justify-center w-full gap-4 flex-col pt-4">
                          <Image
                            width={250}
                            height={250}
                            src={`/assets/images/kyc/approve.png`}
                            alt="approvekyc"
                          />
                          <Typography variant="h5" className="text-center">
                            Bạn đã xác thực (KYC) tài khoản thành công
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {dataProfile?.kyc?.status === "CANCEL" && !confirmKYC && (
                    <Card className="p-2 max-w-xl mx-auto">
                      <CardContent sx={{ pt: 0 }}>
                        <div className="flex items-center justify-center w-full gap-4 flex-col pt-4">
                          <Image
                            width={250}
                            height={250}
                            src={`/assets/images/kyc/cancel.png`}
                            alt="approvekyc"
                          />
                          <Typography
                            variant="subtitle1"
                            className="text-center"
                          >
                            Yêu cầu (KYC) xác thực của bạn đã bị từ chối, xin
                            vui lòng liên hệ Admin, hoặc click vào nút bên dưới
                            để thực hiện (KYC) xác thực lại.
                          </Typography>
                          <button
                            onClick={() => setConfirmKYC(true)}
                            className="disabled:opacity-50 disabled:-translate-y-0 bg-primary-4 hover:-translate-y-1 duration-300 transition-all rounded-xl text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                          >
                            <span className="text-sm text-white block">
                              (KYC) Xác thực lại
                            </span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {dataProfile?.kyc?.status === "PENDING" && (
                    <Card className="p-2 max-w-xl mx-auto">
                      <CardContent sx={{ pt: 0 }}>
                        <div className="flex items-center justify-center w-full gap-4 flex-col pt-4">
                          <Image
                            width={250}
                            height={250}
                            src={`/assets/images/kyc/pending.png`}
                            alt="approvekyc"
                          />
                          <Typography
                            variant="subtitle1"
                            className="text-center"
                          >
                            Yêu cầu (KYC) xác thực của bạn đang trong trạng thái
                            chờ admin duyệt.
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {dataProfile?.kyc?.status === "REJECT" && (
                    <Card className="p-2 max-w-xl mx-auto">
                      <CardContent sx={{ pt: 0 }}>
                        <div className="flex items-center justify-center w-full gap-4 flex-col pt-4">
                          <Image
                            width={250}
                            height={250}
                            src={`/assets/images/kyc/cancel.png`}
                            alt="approvekyc"
                          />
                          <Typography
                            variant="subtitle1"
                            className="text-center"
                          >
                            Yêu cầu (KYC) xác thực của bạn đã bị admin từ chối,
                            bạn không thể thực hiện (KYC) xác thực lại, vui lòng
                            liên hệ admin để hỗ trợ.
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  )} */}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default KycComponent;
