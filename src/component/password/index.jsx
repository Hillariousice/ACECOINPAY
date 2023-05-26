import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import '../../main.css' // Import the Tailwind CSS file

const Password = () => {
  return (
    <div className="container mx-auto">
      <div className="py-6">
          <div className="flex px-4 justify-between">
            <div className="">
              <h3 className="text-xl font-bold">Password</h3>
              <p className="text-sm text-gray-500">Enter your Dynamic password</p>
            </div>
            <div className="relative ml-2">
             
              <input type="password" placeholder="******" className="pl-7 pr-3 py-2  w-40 h-14 text-gray-500 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none">
              <BsFillGrid3X3GapFill className="ml-20 pb-1 text-gray-500" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Password
