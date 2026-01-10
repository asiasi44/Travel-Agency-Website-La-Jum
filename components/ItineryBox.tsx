//@ts-nocheck
"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
const ItinerayBox = ({ dayNumber }) => {
  const [numberOfTextBox, setNumberOfTextBox] = useState([
    {
      id: 1,
    },
  ]);
  const handlePlusbutton = () => {
    setNumberOfTextBox([
      ...numberOfTextBox,
      {
        id: numberOfTextBox[numberOfTextBox.length - 1].id + 1,
      },
    ]);
  };

  const handleDeleteButton = (id) => {
    console.log(id);
    const newTextbox = numberOfTextBox.filter((textBox) => textBox.id !== id);
    setNumberOfTextBox(newTextbox);
  };
  return (
    <div className="shadow-xl rounded-lg px-4 py-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className=" text-[20px] font-bold text-sky-500">
          Day {dayNumber}
        </div>
      </div>
      {numberOfTextBox.map((eachTextBox) => {
        return (
          <div className="flex flex-col gap-2" key={eachTextBox.id}>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <div>Destination</div>
                <div onClick={() => handleDeleteButton(eachTextBox.id)}>
                  <RiDeleteBin6Line size={20} color="red" />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ktm"
                  className="w-full border-1 rounded-lg px-2 py-1 text-sm border-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div>Activities & Plans</div>
              <div>
                <input
                  type="text"
                  placeholder="choose plans"
                  className="w-full border-1 rounded-lg px-2 py-1 text-sm border-gray-200"
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end text-sky-500" onClick={handlePlusbutton}>
        <CiCirclePlus size={40} />
      </div>
    </div>
  );
};
export default ItinerayBox;
