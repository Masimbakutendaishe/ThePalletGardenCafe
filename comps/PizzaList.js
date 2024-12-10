import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">THE BEST PIZZA IN TOWN</h1>
      <p className="text-lg text-gray-600 w-3/4 text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-wrap items-center justify-center w-full gap-6">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
