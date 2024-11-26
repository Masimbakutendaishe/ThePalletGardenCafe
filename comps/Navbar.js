import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex justify-between items-center px-5 py-3 bg-white w-full sticky top-0 z-50 shadow-md">
      {/* Left Logo */}
      <div className="logo">
        <Image src="/logo.jpg" alt="The Pallet Garden Cafe Logo" width={50} height={50} />
      </div>

      {/* Centered Logo (logowhite.png) */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/logowhite.png" alt="Centered Logo" height={50} width={209} />
      </div>

      {/* Hamburger Icon and Dropdown */}
      <div className="absolute left-[calc(50%+300px)]">
        <div className="relative flex flex-col items-center">
          {/* Hamburger Icon */}
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
            <div className="absolute top-10 w-48 bg-white bg-opacity-90 shadow-lg">
              <ul className="text-black font-medium text-center"> {/* Added text-center */}
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/food-menu">Food Menu</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/drinks-menu">Drinks Menu</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/place-order">Place Order</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-all">
                  <a href="/todays-specials">Today's Specials</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="cursor-pointer" />
        <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
