import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/food1.jpg', '/food2.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slideshow Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out transform ${
            index === currentImage ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Gweru's Finest Restaurant!
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">Kitchen X Cafe</p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="w-40 px-6 py-3 text-lg font-semibold text-black bg-white shadow-md hover:bg-gray-300 transition-all">
            Food Menu
          </button>
          <button className="w-40 px-6 py-3 text-lg font-semibold text-black bg-white shadow-md hover:bg-gray-300 transition-all">
            Drinks Menu
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button className="w-40 px-6 py-3 text-lg font-semibold text-black bg-white shadow-md hover:bg-gray-300 transition-all">
            Place Order
          </button>
          <button className="w-40 px-6 py-3 text-lg font-semibold text-black bg-white shadow-md hover:bg-gray-300 transition-all">
            Today's Specials
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
