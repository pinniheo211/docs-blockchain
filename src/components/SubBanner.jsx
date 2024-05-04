export const SubBanner = ({ title, des, button, buttonTwo }) => {
  return (
    <div className="container mx-auto w-full flex justify-center">
      <div className="-translate-y-1/2 bg-dark flex flex-col w-full items-start max-w-5xl gap-3 sm:gap-5 p-5 sm:p-7 md:p-9 border-primary-7 shadow-sd-pink rounded-3xl">
        <p className="text-2xl sm:text-4xl font-semibold text-white">{title}</p>
        <p className="text-white text-base sm:text-lg max-w-2xl">{des}</p>
        <div className="flex gap-3 justify-end w-full">
          <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
            {button}
          </button>
          {buttonTwo && (
            <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
              {buttonTwo}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
