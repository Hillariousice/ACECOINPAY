import { MdModeEdit } from 'react-icons/md';
import '../../main.css'; // Import the Tailwind CSS file

const CardNumber = () => {
  return (
    <div className="container mx-auto">
      <div className="py-6">
        <div className="flex px-4 justify-between">
          <div className="">
            <h3 className="text-xl font-bold">Card Number</h3>
            <p className="text-sm text-gray-500">Enter the 16-digit number on the card</p>
          </div>
          <div>
            <p className="text-bold flex items-center text-blue-500"><MdModeEdit className="mr-1" />Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNumber;
