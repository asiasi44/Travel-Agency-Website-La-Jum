import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";

const HotelBox = () => {
  return (
    <div className="flex flex-col gap-4 shadow-2xl rounded-xl ">
      <div className="bg-[url(/img/hotelDubai.jpeg)] bg-cover bg-top  w-full h-[308px] flex flex-col items-center justify-center gap-6 rounded-t-xl"></div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col">
            <div>Hotel 1</div>
            <div className="flex items-center gap-1 text-yellow-400">
              <div>
                <IoStarSharp />
              </div>
              <div>
                <IoStarSharp />
              </div>
              <div>
                <IoStarSharp />
              </div>
              <div>
                <IoStarSharp />
              </div>
              <div>
                <IoStarSharp />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm text-gray-500">
            <div>from</div>
            <div className="text-sky-500">$$$</div>
            <div>per night</div>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-gray-500 ">
          <div>Free-Wifi</div>
          <div>Breakfast Included</div>
          <div>Pool</div>
          <div>Spa</div>
        </div>
        <Link
          href={"/transfers"}
          className="bg-sky-500 rounded-lg text-center text-white text-xs py-2"
        >
          Choose
        </Link>
      </div>
    </div>
  );
};
export default HotelBox;
