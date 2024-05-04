import Image from "next/image";

export const OverView = ({ title, subTitle, subDesc, desc, logoCoin }) => {
  return (
    <div className="w-full md:flex-row flex-col sm:flex-col gap-10 flex justify-between relative items-center py-5 px-10 bg-gradient-transparent-purple rounded-xl">
      <div className="flex gap-3 items-center">
        <Image src={logoCoin} width={100} height={100} />

        <div className="flex-col gap-10 w-[200px]">
          <h1 className="text-white text-lg font-semibold">{title}</h1>
          <p className="text-white text-base ">{desc} </p>
        </div>
      </div>
      {subTitle && (
        <>
          <div className="absolute h-full md:block lg:block hidden  w-[1px] left-[55%] bg-white"></div>
          <div className="absolute sm:block md:hidden lg:hidden w-full  h-[1px] top-[60%] bg-white"></div>
          <div className="flex-col justify-end gap-10 w-[200px]">
            <h1 className="text-white text-lg font-semibold">{subTitle}</h1>
            <p className="text-white text-base ">{subDesc} </p>
          </div>
        </>
      )}
    </div>
  );
};
