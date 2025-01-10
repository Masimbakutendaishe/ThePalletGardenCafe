import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
   
  const quantity=useSelector(state=>state.cart.quantity)

  return (
    <div className=" flex justify-between items-center px-5 py-3 bg-white w-full sticky top-0 z-50 shadow-md">
      {/* Left Logo */}
      <Link href="/">
        <div className="logo">
          <Image src="/logo.jpg" alt="The Pallet Garden Cafe Logo" width={50} height={50} />
        </div>
      </Link>

      {/* Center Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        {/* Centered Logo (logowhite.png) */}
        <Link href="/">
          <Image 
            src="/logowhite.png" 
            alt="Centered Logo" 
            height={50} 
            width={209} 
            className="hidden sm:block" // Adjust the logo for smaller screens
          />
          <Image 
            src="/logowhite.png" 
            alt="Centered Logo" 
            height={40} 
            width={150} 
            className="sm:hidden" // Adjust the logo for smaller screens
          />
        </Link>
      </div>

      {/* Hamburger Icon and Dropdown */}
      <div className="absolute md:left-[calc(50%+300px)] right-5 flex items-center space-x-6">
        {/* Cart Icon */}
        <Link href="/CartPage">
        <div className="cart-icon relative md:block sm:hidden">
          <Image src="/cart.png" alt="Cart" width={30} height={30} />
            <div className="absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-white p-1 flex items-center justify-center font-bold text-black">
                {quantity}
            </div>
        </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="relative flex flex-col items-center">
          <div
            className="cursor-pointer flex flex-col justify-between h-6 w-8"
            onClick={toggleMenu}
          >
            <span
              className={`block h-1 w-full bg-black transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-black transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-black transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''
              }`}
            ></span>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div
              className="absolute top-10 w-48 bg-white bg-opacity-90 shadow-lg 
                md:left-1/2 md:transform md:-translate-x-1/2 md:right-auto right-0"
            >
              <ul className="text-black font-medium text-center">
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/FoodMenuPage">Food Menu</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/DrinksMenuPage">Drinks Menu</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/ProductsPage">Place Order</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/todays-specials">Today&apos;s Specials</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden sm:flex space-x-4">
        <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="cursor-pointer" />
        <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
