import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center px-5 py-3 bg-white w-full">
      {/* Logo */}
      <div className="logo">
        <Image src="/logo.jpg" alt="The Pallet Garden Cafe Logo" width={50} height={50} />
      </div>

      {/* Centered Logo (logowhite.png) */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/logowhite.png" alt="Centered Logo" height={50} width={209} />
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
