import { useState } from "react";

function Form({ onAddItem, onAddNewData }) {
  const [photoName, setSelectedImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");
  const [ingredients, setIngrident] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photoName || !ingredients || !price) return;
    const id = Date.now();
    let newData = {
      id,
      photoName: `${photoName}?=${id}`,
      name,
      ingredients,
      price,
    };
    onAddNewData(newData);
    onAddItem(false);
    alert("Successfully Sumiteed");
  };
  return (
    <div className="absolute top-[4%] left-[3%] bg-pink-50 w-[94%] h-auto mx-auto rounded-lg md:top-[10%] md:left-[10%] md:h-auto md:w-[80%] lg:top-[10%] lg:h-auto lg:w-[60%] lg:left-[20%]">
      <div className="text-end bg-slate-600 ">
        <button
          className="text-2xl px-3 text-white"
          onClick={() => onAddItem(false)}
        >
          ✕
        </button>
      </div>
      <h1 className="text-center text-white text-3xl font-bold border-b-4 bg-slate-600">
        Add New Item
      </h1>
      <form className="p-5 text-xl font-bold" onSubmit={handleSubmit}>
        <label htmlFor="image" className="block  py-3">
          Random Image :
        </label>
        <input
          type="text"
          name="image"
          placeholder="Imgae is Generated"
          className="w-full p-3 bg-slate-300 rounded-lg focus:none"
          disabled
        />
        <label htmlFor="fname" className="block py-3">
          Name of Food:
          <input
            type="text"
            name="fname"
            required
            placeholder="Food Name Please"
            className="w-full p-3 bg-slate-300 rounded-lg focus:none"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="ingridents" className="block  py-3">
          Food Ingridents
        </label>
        <input
          type="text"
          required
          placeholder="Ingrodents Please"
          className="w-full bg-slate-300  rounded-lg p-3"
          onChange={(e) => setIngrident(e.target.value)}
        />
        <label htmlFor="price" className="block  py-3">
          Price $
        </label>
        <input
          type="text"
          placeholder="Enter price"
          required
          className="w-full bg-slate-300  rounded-lg p-3 "
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button className="bg-pink-500 px-4 py-1 rounded-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
