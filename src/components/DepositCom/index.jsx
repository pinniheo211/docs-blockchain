import Image from "next/image";
import { DefaultCopyField } from "@eisberg-labs/mui-copy-field";
import { ThemeProvider } from "@mui/material/styles";
import { CopyField } from "@/lib/mui/custom-theme";
import SkeletonDeposit from "../skeleton/SkeletonDeposit";
export const DepositCom = () => {
  const a = false;
  return (
    <div className=" container flex flex-col gap-4">
      {a ? (
        <SkeletonDeposit />
      ) : (
        <>
          <span className="font-semibold text-2xl text-qblacktext">
            Nạp tiền
          </span>
          <div>
            <div className="w-full sm:p-10 p-3  ">
              <div className="w-full flex flex-col items-center gap-3">
                <h1 className="text-lg font-semibold">
                  Nạp tiền vào NOW Blockchain
                </h1>
                <Image
                  src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                  alt=""
                  width={300}
                  height={300}
                />

                <p className="font-medium text-base">Quét để nhận địa chỉ ví</p>
                <div className=" w-full lg:w-2/4 mt-10 text-white">
                  <ThemeProvider theme={CopyField}>
                    <DefaultCopyField
                      fullWidth
                      sx={{ input: { color: "white" } }}
                      style={{
                        border: "1px solid #fff",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      // value={dataDeposit?.data?.wallet}
                      value="jadhwjhdjknawkjndkjawndkawkdnkaw"
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
