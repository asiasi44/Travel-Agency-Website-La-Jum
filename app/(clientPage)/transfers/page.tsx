import { IoIosArrowBack } from "react-icons/io";
import { BiBus } from "react-icons/bi";
import TransferBox from "../../components/TransferBox";
import Link from "next/link";

const TransfersPage = () => {
    return (
        <div className="flex flex-col mt-4 gap-14">
            <div className="flex justify-between px-24 ">
            
                <Link href={"/hotels"} className="flex items-center gap-2">
                    <div><IoIosArrowBack/></div>
                    <div >Back</div>
                </Link>

                <div className="flex flex-col items-center gap-4">
                    <div className=" font-bold text-4xl">Choose your transfer</div>
                    <div className=" text-sm font-[25] text-gray-500">Select transfer option "to the hotel" in the "destination"</div>
                </div>
                <div></div>
                
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="text-sky-500"><BiBus size={40} /></div>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-lg">Sharing Transfers</div>
                    <div className="font-[25] text-sm text-gray-500 ">Share your ride with other travelers and save money</div>
                </div>
            </div>
            <div className="flex gap-4 mx-24 flex-wrap justify-center">
                <TransferBox/>
                <TransferBox/>
                <TransferBox/>
                <TransferBox/>
            </div>
        </div>
    )
}

export default TransfersPage