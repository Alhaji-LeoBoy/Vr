function Card({ DataObject, handleAddtoCart }) {
  return (
    <div className=" flex flex-wrap gap-2 justify-center sm:flex-col md:flex-row md:gap-2 md:mx-auto lg:flex-row lg:gap-5">
      {DataObject.map((data) => (
        <Item Obj={data} key={data.id} handleAddtoCart={handleAddtoCart} />
      ))}
    </div>
  );
}

const Item = ({ Obj, handleAddtoCart }) => {
  return (
    <div className="w-full bg-gray-900 md:w-[32%] lg:w-[300px] rounded-lg shadow-md">
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
        <p className="flex justify-between  px-3 py-2 md:px-0 lg:px-4">
          <span className="text-yellow-400 font-bold text-xl">
            Price ${Obj.price}
          </span>{" "}
          <span className="italic bg-gray-400 px-1 py-0 rounded-xl">
            {Obj.soldOut ? "Finished" : "Avilable"}
          </span>
          <button
            onClick={handleAddtoCart}
            id={Obj.id}
            className="bg-yellow-400 px-2 rounded-md text-sm text-black shadow-lg"
          >
            Add
          </button>
        </p>
      </ul>
    </div>
  );
};

export default Card;
