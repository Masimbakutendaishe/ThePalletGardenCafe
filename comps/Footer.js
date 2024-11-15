const Footer = () => {
    return (
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
            {/* About Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">About The Pallet Garden Cafe</h3>
              <p className="text-lg text-center">
                Welcome to The Pallet Garden Cafe. A fun and friendly place to spend quality time with your friends and family in Gweru. Enjoy amazing food, good drinks, and a relaxing environment, perfect for everyone to enjoy.
              </p>
            </div>
  
            {/* Hours of Operation Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
              <ul className="text-lg space-y-2 text-center">
                <li>Mon-Wed: 10:30am – 10:30pm</li>
                <li>Thurs-Fri: 10:30am – 10:30pm</li>
                <li>Sat: 10:30am – 10:30pm</li>
                <li>Sun: 10:30am – 10:30pm</li>
              </ul>
            </div>
  
            {/* Contact Info Section */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="text-lg space-y-2 text-center">
                <li>Email: <a href="mailto:palletgardencafe@gmail.com" className="hover:underline">palletgardencafe@gmail.com</a></li>
                <li>Phone: <a href="tel:+263782000510" className="hover:underline">+263782000510</a></li>
                <li>Address: Lobengula Rd, Gweru, Zimbabwe</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 The Pallet Garden Cafe. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  