export const ComingSoon = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative pt-5 min-h-screen flex justify-center items-center">
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-center text-3xl sm:text-left sm:text-2xl lg:text-4xl xl:text-4xl 2xl:text-6xl !leading-tight 2xl:leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-7 via-primary-8 to-primary-4"
        >
          Coming Soon
        </p>
        <div
          className="z-1 w-full h-[130vh] absolute left-[1%] top-[1%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-two.png)`,
          }}
        ></div>
        <div
          className="z-1 w-full h-[130vh] absolute left-[35%] top-[20%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="z-1 w-full h-[130vh] absolute left-[5%] top-[50%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};
