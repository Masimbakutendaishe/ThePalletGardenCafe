import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
      <div className="w-[500px] bg-white rounded-2xl p-12 flex flex-col items-center">
        <h1 className="font-light text-xl mb-6 text-center">
          You will pay ${total} after delivery.
        </h1>
        <div className="w-full mb-4">
          <label className="block mb-2 text-gray-700">Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className="w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-2 text-gray-700">Phone Number</label>
          <input
            placeholder="+1 234 567 89"
            type="text"
            className="w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-2 text-gray-700">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="bg-teal-500 text-white py-2 px-6 rounded-md font-medium text-lg hover:bg-teal-600 transition duration-300 cursor-pointer"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
