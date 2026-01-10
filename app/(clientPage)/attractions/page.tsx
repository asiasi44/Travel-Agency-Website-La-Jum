import AttractionsBox from "@/components/AttractionsBox";
import Link from "next/link";

//@ts-nocheck
const Attractions = () => {
  return (
    <div className="px-24 flex flex-col gap-8 py-8">
      <div className="flex justify-between items-center font-semi-bold">
        <Link href={"/transfers"}> {"<"} Back</Link>
        <div className="flex flex-col items-center gap-2">
          <div className="font-extrabold text-3xl">Choose Your Attraction</div>
          <div className="font-light text-sm text-gray-500">
            Select activities and attractions you'd like to experience in *the
            destination*
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        <AttractionsBox />
        <AttractionsBox />
        <AttractionsBox />
        <AttractionsBox />
      </div>
      <div className="flex justify-between gap-12">
        <Link
          href={"/customItineries"}
          className="border-sky-500 border-1 border-sky-500 rounded-lg w-1/2 text-center text-sky-500 bg-gray-100 py-2 text-lg hover:cursor-pointer hover:font-bold"
        >
          Skip and Customize
        </Link>
        <div className="bg-blue-500 rounded-lg text-center text-lg py-2 w-1/2 text-white hover:cursor-pointer hover:font-bold">
          Continue
        </div>
      </div>
    </div>
  );
};
export default Attractions;
