import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const TransferBox = () => {
  return (
    <div className="flex flex-col gap-4 shadow-2xl p-4">
      <div className="flex justify-between items-center">
        <div>Standard Sharing Transfer</div>
        <div className="flex flex-col items-center">
          <div className="text-sm text-purple-500">$25</div>
          <div className="text-xs">per person</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div>
            <FaCar />
          </div>
          <div className="font-[25] text-sm text-gray-500 ">Shuttle Bus</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <IoPeopleOutline />
          </div>
          <div className="font-[25] text-sm text-gray-500 ">
            Up to 15 passengers
          </div>
        </div>
      </div>
      <div className="font-[25] text-sm text-gray-500 ">
        Hello come ride us with us guys its party time<br></br> All night all
        day lets have fun gthe disco set
      </div>
      <Link
        href={"/attractions"}
        className="bg-sky-500 rounded-lg text-center text-white text-xs py-2"
      >
        Select
      </Link>
    </div>
  );
};

export default TransferBox;
