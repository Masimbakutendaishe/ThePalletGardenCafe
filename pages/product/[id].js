import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ item }) => {
  const [price, setPrice] = useState(item.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = item.prices[sizeIndex] - item.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...item, extras, price, quantity }));
  };

  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-100px)]">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          <Image src={item.img} alt="Item" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
        <span className="text-lg font-medium text-red-600 border-b border-red-600 mb-4 block">
          ${price}
        </span>
        <p className="mb-6">{item.desc}</p>
        <h3 className="text-lg font-semibold mb-3">Choose the size</h3>
        <div className="flex space-x-4 mb-6">
          {item.prices.map((_, index) => (
            <div
              key={index}
              className={`relative cursor-pointer ${index === 1 ? "w-10 h-10" : "w-8 h-8"} ${
                index === 2 ? "w-12 h-12" : ""
              }`}
              onClick={() => handleSize(index)}
            >
              <Image src="/img/size.png" alt="Size" layout="fill" />
              <span className="absolute -top-1 -right-5 bg-teal-500 text-white text-sm px-2 rounded-full">
                {index === 0 ? "Small" : index === 1 ? "Medium" : "Large"}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-3">Choose additional ingredients</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          {item.extraOptions.map((option) => (
            <div className="flex items-center space-x-2" key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="w-5 h-5"
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor={option.text} className="text-sm font-medium">
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-16 h-10 border rounded px-2"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      item: res.data,
    },
  };
};

export default Product;
