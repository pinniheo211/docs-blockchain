import { Skeleton } from "@mui/material";

const SkeletonDeposit = () => {
  return (
    <div className="w-full mt-10">
      <Skeleton animation="wave" width={200} height={50}></Skeleton>

      <div className="w-full flex justify-end">
        <div className="w-full p-10 rounded-lg shadow ">
          <div className="w-full flex flex-col items-center">
            <Skeleton animation="wave" width="200px" height="50px"></Skeleton>
            <Skeleton
              animation="wave"
              width="300px"
              height="300px"
              className="rounded-sm"
            />
            <Skeleton animation="wave" width="30%" height={45}></Skeleton>
            <div className="flex justify-center w-full">
              <Skeleton width="40%" height="50px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDeposit;
