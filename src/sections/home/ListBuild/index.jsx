import Image from "next/image";
import { listBuilding } from "./helper";

export const ListBuild = () => {
  return (
    <div className="bg-gradient-white py-5 px-10 rounded-xl w-full ]">
      <ul className="flex items-center justify-around gap-3">
        {listBuilding.map((item) => {
          return (
            <li key={item.id}>
              <Image src={item.img} width={100} height={100} alt="build" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
