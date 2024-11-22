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

const ContentSection = () => {
  const teamProfiles = [
    {
      name: "Chef John Doe",
      expertise: "Master of Italian cuisine, specializing in pasta and pizza.",
      image: "/chef.jpg",
    },
    {
      name: "Chef Jane Smith",
      expertise: "Expert in French pastries and desserts.",
      image: "/chef.jpg",
    },
    {
      name: "Chef Michael Brown",
      expertise: "Specializes in fusion dishes blending Asian and African flavors.",
      image: "/chef.jpg",
    },
  ];

  const [currentProfile, setCurrentProfile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % teamProfiles.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Today's Specials Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">Today's Specials

        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/grilled.jpg"
            alt="Grilled Salmon"
            className="w-60 h-60 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold">Grilled Salmon</h3>
            <p className="text-gray-700">
              Freshly grilled salmon served with lemon butter sauce and seasonal veggies.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={teamProfiles[currentProfile].image}
            alt={teamProfiles[currentProfile].name}
            className="w-60 h-60 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold">{teamProfiles[currentProfile].name}</h3>
            <p className="text-gray-700">{teamProfiles[currentProfile].expertise}</p>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">Our Location</h2>
        <div className="w-full h-[400px]">
          <iframe
            title="Pallet Garden Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.834287078763!2d144.95373531591896!3d-37.816218079751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43cbb1e76b%3A0x33b4e0e1b0b650b3!2sPallet%20Garden%20Cafe!5e0!3m2!1sen!2sau!4v1611044306781!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="shadow-md"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default () => (
  <div>
    <HeroSection />
    <ContentSection />
  </div>
);
