import Image from "next/image";
import securityImage from "@/assets/images/home/securitySection.jpeg";
import { Title, Underline } from "../style";
export const Security = () => {
  return (
    // <div className="py-10 md:py-16 w-full container flex flex-col md:flex-row items-start sm:gap-10 lg:gap-60 md:gap-70">
    //   <div
    //     data-aos="fade-up"
    //     className="lg:pt-[80px] pt-[10px] md:w-2/4 w-full lg:w-2/4 relative"
    //   >
    //     <Title>Join a community of millions.</Title>
    //     <Underline></Underline>
    //   </div>
    //   <div
    //     data-aos="fade-up"
    //     className="flex flex-col w-full items-start justify-start gap-3 md:gap-8 "
    //   >
    //     <div className="flex flex-col justify-start">
    //       <p className="lg:text-[50px] xl:text-[100px] text-[40px] font-extrabold bg-gradient-to-r from-[#F40074] to-[#fff] bg-clip-text text-transparent">
    //         11.5M+
    //       </p>
    //       <span className="text-white text-xl font-normal">
    //         ACTIVE ACCOUNTS
    //       </span>
    //     </div>
    //     <div className="flex flex-col justify-start">
    //       <p className="lg:text-[50px] xl:text-[100px] text-[40px] font-extrabold bg-gradient-to-r from-[#F40000] to-[#fff] bg-clip-text text-transparent">
    //         20.5M
    //       </p>
    //       <span className="text-white text-xl font-normal">NFTS MINTED</span>
    //     </div>
    //     <div className="flex flex-col justify-start">
    //       <p className="lg:text-[50px] xl:text-[100px] text-[40px] font-extrabold bg-gradient-to-r from-[#0036F4] to-[#fff] bg-clip-text text-transparent">
    //         $0.00025
    //       </p>
    //       <span className="text-white text-xl font-normal">
    //         AVERAGE COST PER TRANSACTION
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="py-10 xl:py-16 2xl:py-20 container flex flex-col  items-center gap-3 md:gap-8">
      <div
        data-aos="fade-up"
        className="flex flex-col items-start justify-start gap-3 md:gap-8 w-full "
      >
        <div
          style={{ backgroundImage: `url(${securityImage.src})` }}
          className="w-full bg-cover bg-center bg-no-repeat py-14 lg:py-16 xl:py-24 2xl:py-32 rounded-3xl bg-gradient-helping flex items-center justify-around shadow-lg"
        >
          <div className="flex w-4/5 xl:w-3/4 flex-col items-start justify-center gap-3 md:gap-5 xl:gap-7">
            {/* <button className="block my-1 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-7 md:py-3 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
              CASE STUDY
            </button> */}
            <p className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white break-words">
              A Chain is No Stronger Than its Weakest Link
            </p>
            <p className="text-base lg:text-lg font-semibold text-white max-w-[800px]">
              we recognize the critical importance of identifying and mitigating
              vulnerabilities across various domains, including security,
              teamwork, and personal development. Just as the integrity of a
              chain hinges upon the strength of each individual link, the
              resilience of any system or organization is contingent upon
              addressing its most vulnerable components. This principle
              underscores our unwavering commitment to meticulous vigilance and
              proactive measures.
            </p>
            <p className="text-base lg:text-lg font-semibold text-white max-w-[800px]">
              We maintain a constant vigilance for threats targeting our
              community, swiftly investigating and remediating any identified
              risks to ensure the safety of our users. Moreover, we uphold the
              highest standards of security through regular external assessments
              and audits conducted on the NOW network and its associated
              products. These assessments serve as a deliberate effort to
              fortify our security infrastructure, with the results informing
              strategic actions aimed at continuous improvement and enhancement
            </p>
          </div>
          <div className="w-auto"></div>
        </div>
      </div>
    </div>
  );
};
