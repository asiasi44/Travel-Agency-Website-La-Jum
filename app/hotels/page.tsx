
import { IoIosArrowBack } from "react-icons/io";
import HotelBox from "../components/HotelBox"
import Link from "next/link";




const Hotels = () => {
    return (
        <div className="flex flex-col mt-4 gap-14">
           
            <div className="flex justify-between px-24 ">
            
                <Link href={"/hotels"} className="flex items-center gap-2">
                    <div><IoIosArrowBack/></div>
                    <div >Home</div>
                </Link>
            <div className="flex flex-col items-center gap-4">
                    <div className=" font-bold text-4xl">Hotels Available</div>
                    <div className=" text-sm font-[25] text-gray-500">3 participants .5/2/2025-10/2/2025. 5 days</div>
                </div>
                <div></div>

           </div>
            <div className="flex gap-4 mx-24 flex-wrap justify-center">
               <HotelBox/> 
                <HotelBox/> 
                 <HotelBox/> 
                  <HotelBox/> 
                   <HotelBox/> 
                    <HotelBox/> 
            </div>
       
        </div>
    )
}

export default Hotels