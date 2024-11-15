import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-white w-full">
      {/* Logo */}
      <div className="logo">
        <Image src="/logo.jpg" alt="The Pallet Garden Cafe Logo" width={50} height={50} />
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
