function Cart({ onDisplayCart, filteredObjects, onDeleteItem, total, clear }) {
  const handleClose = () => {
    onDisplayCart(false);
  };

  const confirm = () => {
    const userConfirmed = window.confirm("Are Your Sure ?");
    if (userConfirmed) clear();
  };
  return (
    <div className="absolute top-[4%] left-[2%] bg-slate-200 w-[95%] h-auto mx-auto rounded-lg md:top-[10%] lg:top-[10%] lg:h-auto lg:w-[80%] lg:left-[10%]">
      <div className="text-end bg-slate-800">
        <button className="text-2xl px-3 text-white" onClick={handleClose}>
          ✕
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold bg-slate-800 text-white">
        Cart
      </h1>
      <Card filteredObjects={filteredObjects} onDeleteItem={onDeleteItem} />
      <div className="text-center">
        <button
          className="font-bold rounded-sm bg-orange-600 px-2"
          onClick={confirm}
        >
          Clear Cart
        </button>
      </div>
      <p className="bg-yellow-200 flex justify-between px-4 text-2xl font-bold">
        <span> Total </span> <span className="text-pink-600">${total}</span>
      </p>
    </div>
  );
}

function Card({ filteredObjects, onDeleteItem }) {
  return (
    <div className=" flex flex-wrap gap-2 py-3 justify-center sm:flex-col md:flex-row md:gap-2 md:mx-auto lg:flex-row lg:gap-5">
      {filteredObjects.map((data) => (
        <Item Obj={data} key={data.id} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

const Item = ({ Obj, onDeleteItem }) => {
  return (
    <div className="w-[90%] bg-gray-900 md:w-[32%] lg:w-[300px] rounded-lg shadow-md">
      <img
        src={Obj.photoName}
        alt="photois missing"
        className="w-full fit h-[250px] rounded"
      />
      <ul>
        <li className="text-xl text-white font-bold px-3">{Obj.name}</li>
        <li className="text-balance text-md px-3 text-white font-bold">
          {Obj.ingredients}
        </li>
        <p className="flex justify-between  px-3 py-2">
          <span className="text-yellow-400 font-bold text-xl">
            Price ${Obj.price}
          </span>{" "}
          <span className="italic bg-gray-400 px-1 py-0 rounded-xl">
            {Obj.soldOut ? "Avilable" : "Finished"}
          </span>
          <button
            onClick={onDeleteItem}
            id={Obj.id}
            className="bg-yellow-400 px-2 rounded-md text-sm text-black shadow-lg"
          >
            Delete
          </button>
        </p>
      </ul>
    </div>
  );
};

export default Cart;
