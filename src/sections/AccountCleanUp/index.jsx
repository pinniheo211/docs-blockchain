export default function AccountCleanUp() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h2 classNameName="text-3xl lg:text-4xl font-bold">Account Cleanup</h2>
      <div className="mx-auto w-full container max-w-3xl rounded-lg p-5 shadow">
        <form>
          <div className="flex items-center space-x-10 py-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="radio1"
                id="radioButton1"
                className="h-5 w-5"
              />
              <label
                for="radioButton1"
                className="pl-3 text-base font-medium text-primary-4"
              >
                Device
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="radio2"
                id="radioButton2"
                className="h-5 w-5"
              />
              <label
                for="radioButton2"
                className="pl-3 text-base font-medium text-primary-4"
              >
                Current location
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="radio3"
                id="radioButton3"
                className="h-5 w-5"
              />
              <label
                for="radioButton3"
                className="pl-3 text-base font-medium text-primary-4"
              >
                KYC information
              </label>
            </div>
          </div>
          <div className="mb-5 ">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-primary-4"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-primary-4"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-primary-4"
            >
              Confirm Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter confirm your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:shadow-form w-full mt-4 rounded-md bg-primary-4 hover:-translate-y-1 duration-300 transition-all py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Clean Data
            </button>
          </div>
        </form>
      </div>
      <h2 classNameName="text-3xl lg:text-4xl font-bold pt-5">
        Account Deletion
      </h2>
      <button className="hover:shadow-form w-full mt-5 max-w-xl rounded-md bg-primary-4 hover:-translate-y-1 duration-300 transition-all py-3 px-8 text-center text-base font-semibold text-white outline-none">
        Delete Account
      </button>
    </div>
  );
}
