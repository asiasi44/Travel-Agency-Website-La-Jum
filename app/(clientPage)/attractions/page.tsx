import AttractionsBox from "@/app/components/AttractionsBox";
import Link from "next/link";

//@ts-nocheck
const Attractions = () => {
  return (
    <div className="px-24 flex flex-col gap-8">
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
    </div>
  );
};
export default Attractions;
