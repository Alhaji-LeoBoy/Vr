const SortSection = ({
  onAddItem,
  onDisplayCart,
  handleSort,
  handleSort2,
  handleSort3,
  handleSort4,
  cartNumber,
}) => {
  const handleAddItem = () => {
    onAddItem((item) => !item);
    onDisplayCart(false);
  };
  const handleDisplayCart = () => {
    onDisplayCart((item) => !item);
    onAddItem(false);
  };
  const handlelistSort = (e) => {
    let value = e.target.value;
    if (value === "hprice") {
      return handleSort2();
    } else if (value === "a-z") {
      return handleSort();
    } else if (value === "lprice") {
      return handleSort4();
    } else if (value === "z-a") {
      return handleSort3();
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold capitalize border-b-4 lg:text-5xl">
        Welcome to Our Resturant
      </h1>
      <h1 className="text-2xl font-bold">Sort Items</h1>

      <select
        onChange={handlelistSort}
        className="p-1 bg-gray-500 text-white font-bold rounded-sm"
      >
        <option value="">Select Sort Option</option>
        <option value="hprice">Higest Price</option>
        <option value="a-z">A-z</option>
        <option value="lprice">Lowest Price</option>
        <option value="z-a">Z-a</option>
      </select>
      <Button onClick={handleAddItem}>Add Item</Button>
      <Button onClick={handleDisplayCart}>
        Cart <span> {cartNumber === 0 ? "" : cartNumber} </span>
      </Button>
    </div>
  );
};

// Sort Content Function

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-pink-700 px-1 rounded-md mx-1 text-white font-bold lg:px-3 lg:mx-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default SortSection;
