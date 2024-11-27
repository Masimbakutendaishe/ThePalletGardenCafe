import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/drink1.jpg', '/drink2.jpg', '/drink3.jpg', '/drink4.jpg', 
    '/drink5.jpg', '/drink6.jpg', '/drink7.jpg', '/drink8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
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
          Drinks Menu
        </h1>

        {/* Button for downloading the menu */}
        <a href="/drinks-menu.pdf" download>
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
      name: 'Mango Smoothie',
      image: '/drink1.jpg',
      description: 'A refreshing smoothie made with ripe mangoes and creamy yogurt.',
      price: '$5.99',
    },
    {
      name: 'Iced Coffee',
      image: '/drink2.jpg',
      description: 'Cold brew coffee with a touch of cream and ice.',
      price: '$4.49',
    },
    {
      name: 'Lemonade',
      image: '/drink3.jpg',
      description: 'Freshly squeezed lemonade with a tangy kick.',
      price: '$3.99',
    },
    {
      name: 'Green Tea',
      image: '/drink4.jpg',
      description: 'A calming brew of premium green tea leaves.',
      price: '$2.99',
    },
    {
      name: 'Strawberry Milkshake',
      image: '/drink5.jpg',
      description: 'A sweet, creamy milkshake made with fresh strawberries.',
      price: '$6.49',
    },
    {
      name: 'Hot Chocolate',
      image: '/drink6.jpg',
      description: 'Rich and velvety hot chocolate with whipped cream.',
      price: '$4.99',
    },
    {
      name: 'Sparkling Water',
      image: '/drink7.jpg',
      description: 'Crisp and refreshing sparkling water with a hint of lime.',
      price: '$2.49',
    },
    {
      name: 'Fresh Orange Juice',
      image: '/drink8.jpg',
      description: '100% freshly squeezed orange juice, full of vitamin C.',
      price: '$3.49',
    },
  ];

  return (
    <div className="bg-white py-8">
      <section className="text-center mb-12">
        <img src="/leaf.png" alt="Leaf Icon" className="mx-auto w-8 h-8 mb-4" />
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">
          Our Drinks Menu
        </h2>
        <p className="text-lg text-gray-600">
          Welcome to our drinks menu! Whether you're looking for a refreshing smoothie, a hot drink, or something sparkling, we've got you covered!
        </p>
      </section>

      {/* Fun Section */}
      <section className="flex mb-8 border-t-4 border-b-4">
        <div className="flex-1 p-6 text-center border-r-4">
          <h3 className="text-2xl font-semibold mb-4">Promotional Drinks</h3>
          <img src="/drink5.jpg" alt="Drink Promo" className="w-full h-45 object-cover mb-4" />
          <p className="text-gray-600">Special offer on this drink, get 15% off your order today!</p>
        </div>
        <div className="flex-1 p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Special Offers</h3>
          <img src="/spoffer2.jpg" alt="Drink Promo" className="w-full h-45 object-cover mb-4" />
          <p className="text-gray-600">Check out our daily specials and discounts on select drinks!</p>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Today's Fun Fact!</h3>
        <p className="text-lg mb-4">Did you know? Drinking water can help improve your skin health!</p>
        <img src="/drink7.jpg" alt="Water" className="mx-auto w-32 h-32 object-cover rounded-full" />
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

const DrinksMenuPage = () => {
  return (
    <div>
      <HeroSection />
      <MenuItems />
    </div>
  );
};

export default DrinksMenuPage;
