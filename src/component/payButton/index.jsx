import '../../main.css';

const PayButton = () => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-16 py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
      >
        Pay Now
      </button>
    </div>
  );
}

export default PayButton;
