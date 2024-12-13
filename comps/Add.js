import { useState } from "react";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState({});

  const changePrice = (e, index) => {
    const currentPrices = [...prices];
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setExtraOptions((prev) => [...prev, extra]);
    setExtra({});
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] p-10 rounded-2xl relative shadow-lg flex flex-col">
        <span
          onClick={() => setClose(true)}
          className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          X
        </span>
        <h1 className="text-lg font-bold mb-4">Add a new Item</h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Choose an image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-b border-gray-400 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            rows={4}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border-b border-gray-400 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Prices</label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
              className="w-1/4 border-b border-gray-400 outline-none"
            />
            <input
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
              className="w-1/4 border-b border-gray-400 outline-none"
            />
            <input
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
              className="w-1/4 border-b border-gray-400 outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Extra</label>
          <div className="flex space-x-4 mb-2">
            <input
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
              className="w-1/2 border-b border-gray-400 outline-none"
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
              className="w-1/2 border-b border-gray-400 outline-none"
            />
            <button
              onClick={handleExtra}
              className="bg-teal-100 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {extraOptions.map((option, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm border border-black bg-white text-black rounded-full cursor-pointer"
              >
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleCreate}
          className="self-end bg-teal-50 text-black py-2 px-6 rounded-md"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
