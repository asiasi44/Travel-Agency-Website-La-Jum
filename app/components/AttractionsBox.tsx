import { CiTimer } from "react-icons/ci";

const AttractionsBox = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm">
      <div className="w-[380px] h-[200] bg-[url(/img/attractionsBoxImage.png)] bg-cover bg-center rounded-t-lg"></div>
      <div className="flex flex-wrap flex-col px-4 py-4 gap-4">
        <div>Burj Khalifa</div>
        <div className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <div className="flex gap-2 items-center">
            <span className="text-purple-300">
              <CiTimer />
            </span>
            <span>3 hours</span>
          </div>
          <div className="flex gap-2">
            <span className="text-purple-300">$</span>
            <span>$45 per person</span>
          </div>
        </div>
        <div className="text-center bg-blue-400 text-white text-xs py-2 rounded-lg">
          Select
        </div>
      </div>
    </div>
  );
};

export default AttractionsBox;
