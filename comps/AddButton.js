const AddButton = ({ setClose }) => {
    return (
      <div
        onClick={() => setClose(false)}
        className="bg-red-600 text-white font-medium text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-red-700 transition-all"
      >
        Add New Pizza
      </div>
    );
  };
  
  export default AddButton;
  
