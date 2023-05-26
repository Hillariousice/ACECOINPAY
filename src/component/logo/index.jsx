
import Acelogo from '../../asset/docket.png'
import '../../main.css' 
const Logo = () => {
  return (
    <div className="container mx-auto">
    <div className="py-6">
     
        <div className="flex px-4 justify-center">
          <div className="flex items-center mr-7">
            <img src={Acelogo} alt="" className="w-6 h-5 mr-2 rounded-3xl bg-blue-600" />
            <div className="flex items-center">
              <h3 className="text-2xl text-black">AceCoin</h3>
              <h3 className="text-2xl text-gray-500">Pay</h3>
            </div>
          </div>
          <div className="flex ml-12">
            <input type="text" placeholder="0" className=" m-1 pl-4 pr-3 py-2 text-white w-12 h-14 bg-gray-800 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
            <input type="text" placeholder=" 1" className="m-1 pl-4 pr-3 py-2 text-white  w-12 h-14 bg-gray-800 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
            <p className="text-xl font-bold p-2 ">:</p>
            <input type="text" placeholder="1" className="m-1 pl-4 pr-3 py-2 text-white w-12 h-14 bg-gray-800 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
            <input type="text" placeholder="9" className="m-1 pl-4 pr-3 py-2 text-white w-12 h-14 bg-gray-800 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
          </div>
        </div>
      </div>
   
  </div>
  )
}

export default Logo
