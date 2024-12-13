const AddButton = ({ setClose }) => {
    return (
      <div
        onClick={() => setClose(false)}
        className="bg-white text-black font-medium text-center py-2 px-4 rounded-lg shadow cursor-pointer hover:bg-gray-300 transition-all"
      >
        Add New Item
      </div>
    );
  };
  
  export default AddButton;
  
