import ItinerayBox from "@/components/ItineryBox"
const CustomItineries = () => {
    return (
        <div className=" px-24 py-8 flex gap-8 flex-col">
            <div className="flex justify-between  items-center">
                <div className="font-semibold">
                    {"<"} Back
                </div>

                <div className="flex flex-col items-center gap-3">
                    <div className="font-extrabold text-4xl">
                        Customize Your Itineray
                    </div>
                    <div className="text-sm text-gray-500">
                        Plan each day of your trip to *destination*
                    </div>

                </div>
                <div>
                </div>

            </div>
            <div className="flex flex-col gap-8">
                <ItinerayBox dayNumber={"1"} />
                <ItinerayBox dayNumber={"2"} />
                <ItinerayBox dayNumber={"3"} />

            </div>
        </div>
    )
}

export default CustomItineries