//@ts-nocheck
'use client'
import { VscSearch } from "react-icons/vsc";
import { MdOutlineGroups2 } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaHotel } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

const HomePage=()=>{
    const [ destination, setDestination] = useState("")
    const [ pax, setPax]= useState(0)
    const [ leaveDate, setLeaveDate ] = useState("")
    const [ returnDate, setReturnDate ] = useState("")
    const [ hotelPreference, setHotelPreferences ] = useState("")

    const handleSubmit = async () => {
       console.log({destination, pax, leaveDate, returnDate, hotelPreference})
    }
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="font-extrabold text-[36px]">Discover Your Next Adventure</div>
            <div className="text-center">
                Hello boys and girls lets travel world with us! welcome to this page jdbgaghdfshsdfvchjsdvcjhsdvchds
                <br></br>
                vchdsvchdcvhjscdhjsdghjasgd
            </div>
            <div className="bg-[url(/img/backgroundImage.webp)] bg-cover bg-top bg- px-20 py-10 rounded-4xl flex flex-col items-center justify-center gap-6">
                <div className="flex gap-2" > 
                    <div className="bg-white/70 rounded-lg px-4 py-4 w-84 drop-shadow-xl flex gap-2 items-center">
                        <div><VscSearch /></div>
                        <div>
                            <input placeholder="Where to?" type="text" onChange={(event) => setDestination(event.target.value)}/>
                        </div>
                    </div>
                    <div className="bg-white/70 rounded-lg px-4 py-4 w-84 drop-shadow-xl flex gap-2 items-center">
                        <div><MdOutlineGroups2/></div>
                        <div><input placeholder="PAX" type="number" onChange={ (event) => setPax(event.target.value)}/></div>
                    </div>
                </div>
                <div className="flex gap-2">                    
                    <div className="bg-white/70 rounded-lg px-4 py-4 w-84 flex justify-between items-center drop-shadow-xl">
                        <div>
                            <div><input placeholder="Leave" className="w-22" type="date" onChange={(event) => setLeaveDate(event.target.value)}/></div>
                        </div>
                        <div><CiCalendar size={30}/></div>
                        <div>
                            <div><input placeholder="Return" className="w-22" type="date" onChange={(event) => setReturnDate(event.target.value)}/></div>
                        </div>
                    </div>
                    <div className="bg-white/70 rounded-lg px-4 py-4 w-84 drop-shadow-xl flex gap-2 items-center">
                        <div><FaHotel/></div>
                        <div><input placeholder="Hotel Preference" type="number" onChange={(event) => setHotelPreferences(event.target.value)}/></div>
                    </div></div>
                <Link 
                    className="bg-white/20 w-full text-center text-white rounded-lg py-4 text-lg font-extrabold border-white border-1 border-double hover:cursor-pointer" 
                    onClick={handleSubmit}
                    href={"/hotels"}
                >
                        Search Hotels
                </Link>

            </div>
            
        </div>
    )
}
export default HomePage