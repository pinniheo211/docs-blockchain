import { Banner } from "@/components/Banner";
export const Mission = () => {
  const DATA_DUMMY = {
    title: "Mission",
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container py-[100px] relative flex flex-col gap-10 py-10 max-w-5xl">
        <p className="lg:text-3xl text-lg leading-relaxed">
          At NOW Blockchain, our vision is to merge blockchain technology with
          the inherent security of mobile devices, creating a new standard of
          trust. We're committed to building a robust ecosystem where
          individuals transact with confidence, knowing their assets are
          safeguarded by our innovative approach to security.
        </p>
      </div>
    </div>
  );
};
