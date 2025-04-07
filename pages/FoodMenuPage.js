import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/food3.jpg', '/food4.jpg', '/food5.jpg', '/food6.jpg', 
    '/food7.jpg', '/food4.jpg', '/food8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500); // Change every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
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
          Food Menu
        </h1>

        {/* Button for downloading the menu */}
        <a href="/food-menu.pdf" download>
          <button className="w-40 px-6 py-3 text-lg font-semibold text-black bg-white shadow-md hover:bg-gray-300 transition-all">
            Download Menu PDF
          </button>
        </a>
      </div>
    </div>
  );
};

const MenuItems = () => {
  const menuItems = [
    {
      name: 'Grilled Chicken Breast',
      image: '/food1.jpg',
      description: 'Succulent grilled chicken breast served with roasted vegetables.',
      price: '$12.99',
    },
    {
      name: 'Vegetable Stir Fry',
      image: '/food2.jpg',
      description: 'A mix of fresh vegetables stir-fried to perfection with savory sauce.',
      price: '$10.99',
    },
    {
      name: 'Salmon Fillet',
      image: '/food3.jpg',
      description: 'Perfectly seared salmon fillet with lemon butter sauce.',
      price: '$15.99',
    },
    {
      name: 'Spaghetti Bolognese',
      image: '/food4.jpg',
      description: 'Classic Italian pasta with a rich and hearty meat sauce.',
      price: '$14.99',
    },
    {
      name: 'Beef Burger',
      image: '/food5.jpg',
      description: 'Juicy beef patty with lettuce, tomato, and our special sauce.',
      price: '$11.99',
    },
    {
      name: 'Caesar Salad',
      image: '/food6.jpg',
      description: 'Crisp romaine lettuce, crunchy croutons, and creamy Caesar dressing.',
      price: '$9.99',
    },
    {
      name: 'Fish Tacos',
      image: '/food7.jpg',
      description: 'Soft tortillas filled with fresh grilled fish and topped with slaw.',
      price: '$13.99',
    },
    {
      name: 'Penne Arrabbiata',
      image: '/food8.jpg',
      description: 'Spicy penne pasta tossed in a flavorful tomato and garlic sauce.',
      price: '$12.49',
    },
  ];

  return (
    <div className="bg-white py-8">
      <section className="text-center mb-12">
        <img src="/leaf.png" alt="Leaf Icon" className="mx-auto w-8 h-8 mb-4" />
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">
          Our Food Menu
        </h2>
        <p className="text-lg text-gray-600">
          Welcome to our menu page! Feel free to browse through our delicious meals. 
          Whether you&apos;re in the mood for something savory or sweet, we&apos;ve got it all!
        </p>
      </section>

      {/* Fun Section */}
      <section className="flex mb-8 border-t-4 border-b-4">
        <div className="flex-1 p-6 text-center border-r-4">
          <h3 className="text-2xl font-semibold mb-4">Promotional Meals</h3>
          <img src="/food5.jpg" alt="Food Promo" className="w-full h-70 object-cover mb-4" />
          <p className="text-gray-600">Special offer on this meal, get 20% off your order today!</p>
        </div>
        <div className="flex-1 p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Special Offers</h3>
          <img src="/spoffer.jpg" alt="Food Promo" className="w-full h-70 object-cover mb-4" />
          <p className="text-gray-600">Check out our daily specials and discounts on select items!</p>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Today&apos;s Fun Fact!</h3>
        <p className="text-lg mb-4">Did you know? Lemons are packed with vitamin C and can boost your immune system!</p>
        <img src="/lemon.png" alt="Lemon" className="mx-auto w-32 h-32 object-cover rounded-full" />
      </section>

      {/* Menu Items */}
      <div className="flex flex-wrap justify-center gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full sm:w-60 md:w-72 p-4 bg-white rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-lg font-bold text-green-500">{item.price}</p>
              <button className="w-full mt-4 py-2 shadow-md bg-white text-black font-semibold hover:bg-gray-300">
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FoodMenuPage = () => {
  return (
    <div>
      <HeroSection />
      <MenuItems />
    </div>
  );
};

export default FoodMenuPage;
