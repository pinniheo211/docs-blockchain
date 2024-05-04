import { Skeleton } from "@mui/material";

export const FundSkeleton = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <Skeleton animation="wave" width={200} height={50} />
          <div className="bg-gradient-toearnnow flex flex-col p-5 rounded-lg gap-5">
            <Skeleton animation="wave" width={100} height={50} />
            <div className="flex flex-col gap-7">
              <Skeleton
                variant="rounded"
                className="w-full"
                height={200}
              ></Skeleton>
              <Skeleton variant="rounded" className="w-full" height={200} />
              <Skeleton variant="rounded" className="w-full" height={200} />
              <Skeleton variant="rounded" className="w-full" height={200} />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <Skeleton animation="wave" width={200} height={50} />

          <div className="bg-gradient-toearnnow h-[500px] flex flex-col items-center p-5 rounded-lg gap-5">
            {/* <ThemeProvider theme={loginTheme}> */}
            <Skeleton variant="circular" width={300} height={300} />
            <div className="flex flex-wrap gap-3 justify-center">
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={100} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={300} height={10} />
              <Skeleton variant="rounded" width={200} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={100} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={200} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
              <Skeleton variant="rounded" width={100} height={10} />
              <Skeleton variant="rounded" width={50} height={10} />
            </div>
            {/* </ThemeProvider> */}
          </div>
          <Skeleton variant="rounded" className="w-full" height={50} />
        </div>
      </div>
    </div>
  );
};
