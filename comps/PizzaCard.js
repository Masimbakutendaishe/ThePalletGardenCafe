import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="w-1/5 p-5 flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105">
      <Link href={`/product/${pizza._id}`} passHref>
        <Image 
          src={pizza.img} 
          alt={pizza.title} 
          width={500} 
          height={500} 
          className="rounded-lg"
        />
      </Link>
      <h1 className="text-lg font-bold text-red-600 mt-4">{pizza.title}</h1>
      <span className="text-lg font-bold text-gray-500">${pizza.prices[0]}</span>
      <p className="text-center text-gray-600 mt-2">{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
