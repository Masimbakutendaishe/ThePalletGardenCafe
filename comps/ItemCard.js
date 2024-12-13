import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }) => {
  return (
    <div className="w-1/5 p-5 flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105">
      <Link href={`/product/${item._id}`} passHref>
        <Image 
          src={item.img} 
          alt={item.title} 
          width={500} 
          height={500} 
          className="rounded-lg"
        />
      </Link>
      <h1 className="text-lg font-bold text-black mt-4">{item.title}</h1>
      <span className="text-lg font-bold text-gray-500">${item.prices[0]}</span>
      <p className="text-center text-gray-600 mt-2">{item.desc}</p>
    </div>
  );
};

export default ItemCard;
