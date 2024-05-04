import Image from "next/image";

export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="h-24 w-24 flex items-center justify-center rounded-full animate-bounce">
          <Image
            width={55}
            height={55}
            objectFit="scale-down"
            src={"/logoSmall.svg"}
            alt="logo"
          />
        </div>
        {/* <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-[5px] border-b-[5px] border-primary-4 animate-bounce"></div> */}
      </div>
    </div>
  );
}
