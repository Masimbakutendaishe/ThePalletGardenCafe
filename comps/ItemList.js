import ItemCard from "./ItemCard";

const ItemList = ({ itemList }) => {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">THE BEST MEALS IN GWERU</h1>
      <p className="text-lg text-gray-600 w-3/4 text-center mb-6">
        We are renowned for a number of diverse , delicious delights! Fel free to click on one and proceed to check out to place and order!
      </p>
      <div className="flex flex-wrap items-center justify-center w-full gap-6">
        {itemList.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
