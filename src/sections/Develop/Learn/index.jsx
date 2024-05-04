import { TitleDevelop } from "../BannerDevelop/style";
export const Learn = () => {
  return (
    <div className="container -mt-28 md:mt-16">
      <TitleDevelop>Learn Now Blockchain development</TitleDevelop>
      <p className="text-primary-1 mt-3 text-lg md:text-xl">
        Use these Now Blockchain Foundation and community courses to begin your
        journey into Now Blockchain development.
      </p>
      <div className="w-full rounded-3xl overflow-hidden mt-10">
        <div
          data-aos="zoom-in"
          className="w-full bg-cover bg-no-repeat px-5 py-5 sm:p-8 md:p-12 xl:p-16 2xl:px-20 2xl:py-20 flex justify-center flex-col gap-3 sm:gap-4 md:gap-5"
          style={{
            backgroundImage: `url(../../../assets/images/learnBanner1.png)`,
          }}
        >
          <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
            Buy Unboxed
          </button>
          <h1 className="text-white text-4xl xl:text-4xl 2xl:text-5xl font-bold pb-3 md:pb-8 pt-2 md:pt-4 break-words">
            Now Blockchain Development Course
          </h1>
          <p className="text-primary-1 text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-semibold md:leading-10 max-w-xl">
            Quickstart your Now Blockchain development starting from nothing to
            complex programs.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 md:mt-7 xl:mt-10 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10">
        {courses.map((course, index) => {
          return (
            <div
              data-aos="zoom-in"
              key={index}
              className="hover:cursor-pointer hover:!-translate-y-1 z-10 transition-all duration-300 2xl:h-[400px] xl:h-[300px] lg:h-[280px] md:h-[260px] h-[200px]  bg-cover rounded-3xl flex flex-col justify-end"
              style={{
                backgroundImage: `url(${course.background})`,
              }}
            >
              <div className="flex items-start p-6 sm:p-7 md:p-8 2xl:p-10 justify-start gap-3 flex-col">
                <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                  Buy Unboxed
                </button>
                <p className="text-white text-2xl font-semibold">
                  {course.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const courses = [
  {
    link: "#",
    title: "To Earn NOW Bootcamp",
    background: "../../../assets/images/develop/Group-4.png",
  },
  {
    link: "#",
    title: "To Earn NOW Bytes",
    background: "../../../assets/images/develop/Group-5.png",
  },
  {
    link: "#",
    title: "Build on To Earn NOW by Rise In",
    background: "../../../assets/images/develop/Group-6.png",
  },
  {
    link: "#",
    title: "Ethereum to To Earn NOW Development Course",
    background: "../../../assets/images/develop/Group-7.png",
  },
  {
    link: "#",
    title: "Freecodecamp To Earn NOW Course",
    background: "../../../assets/images/develop/Group-8.png",
  },
  {
    link: "#",
    title: "Rust + Now Blockchain Advance Developer Course",
    background: "../../../assets/images/develop/Group-9.png",
  },
];
