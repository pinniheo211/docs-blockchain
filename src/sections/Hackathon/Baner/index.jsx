export const BannerHack = () => {
  return (
    <div
      className="banner-home w-full pt-20 pb-44 sm:pt-32 sm:pb-56 sm:bg-full lg:bg-cover  bg-no-repeat relative"
      style={{
        backgroundImage: `url(../../assets/images/bannerHack.png)`,
      }}
    >
      <div className=" container mx-auto w-full flex lg:flex-row md:flex-row flex-col items-center justify-around gap-4">
        <div className="w-full flex flex-col items-center gap-7">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-white text-center max-w-6xl leading-tight sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug">
            Join a Now Blockchain Online Hackathon to Kickstart your Crypto
            Journey
          </h1>
          <p className="text-white text-center text-lg max-w-2xl">
            Now Blockchain hackathons provide ambitious builders a launchpad to
            create projects that push the crypto space forward. Enter your email
            to be notified about the next Now Blockchain Hackathon, coming 2024.
          </p>
          <form className="lg:w-[500px] md:w-2/4 w-full ">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                className="block w-full p-4 bg-bgMain border border-primary-1 ps-10 text-sm text-white rounded-full outline-none"
                placeholder="Enter email address"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-3 top-2/4 translate-y-[-50%] !bg-gradient-dark-pink rounded-full px-5 py-1.5"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
