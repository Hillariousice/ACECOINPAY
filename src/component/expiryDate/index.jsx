import '../../main.css' // Import the Tailwind CSS file

const ExpiryDate = () => {
  return (
    <div className="container mx-auto">
      <div className="py-6">
          <div className="flex px-4 justify-between">
            <div className="">
              <h3 className="text-xl font-bold">Expiry Date</h3>
              <p className="text-sm text-gray-500">Enter the expiration date on the card</p>
            </div>
            <div className="flex ml-5">
            <input type="text" placeholder="09" className="pl-7 pr-3 py-2  w-24 h-14 text-gray-500 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
              <p className="text-xl font-bold p-2">/</p>
              <input type="text" placeholder="22" className="pl-7 pr-3 py-2  w-24 h-14 text-gray-500 text-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-200" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ExpiryDate
