
import { MdVerified } from 'react-icons/md';
import MastercardLogo from '../../asset/mastercard.svg';
import '../../main.css'; // Import the Tailwind CSS file

const CrdDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="">
          <div className="relative ml-2">
            <input
              type="text"
              placeholder="     2412-7512-3412-3446"
              className="ml-2 pl-10 pr-3 py-2 w-full sm:w-56 text-gray-500 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Place your icon component here */}
              <img
                src={MastercardLogo}
                alt="Mastercard Logo"
                className="w-6 h-5 mr-2"
              />
              <MdVerified className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrdDetails;