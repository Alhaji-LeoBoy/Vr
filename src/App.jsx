import SortSection from "./SortSection";
import Card from "./Card";
import pizzaData from "./data/data";
import Form from "./Form";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [data, setData] = useState(pizzaData);
  const [displayForm, setDisplayform] = useState(false);
  const [displayCard, setDisplaycart] = useState(false);
  const [arrofId, seArrofIds] = useState([]);
  const handleAddData = (nData) => {
    setData((data) => [...data, nData]);
    //setshowAddFriends(false);
    // console.log(data);
  };
  let total = 0;
  let cartNumber = 0;
  const handleSort = () => {
    let copyData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
    setData(copyData);
  };
  const handleSort2 = () => {
    let copyData = data.slice().sort((a, b) => b.price - a.price);
    setData(copyData);
  };
  const handleSort3 = () => {
    let copyData = data.slice().sort((a, b) => b.name.localeCompare(a.name));
    setData(copyData);
  };
  const handleSort4 = () => {
    let copyData = data.slice().sort((a, b) => a.price - b.price);
    setData(copyData);
  };

  const handleAddtoCart = (e) => {
    seArrofIds((arrofId) => [...arrofId, Number(e.target.id)]);
  };
  //console.log(arrofId);

  const filteredObjects = data.filter((obj) => arrofId.includes(obj.id));
  //console.log(filteredObjects);
  // function filterObjectsByIds(arrayOfObjects, arrId) {
  //   return arrayOfObjects.filter((obj) => arrId.includes(obj.id));
  // }
  //;
  const getItDelete = (e) => {
    let idDelete = Number(e.target.id);
    seArrofIds(arrofId.filter((ele) => ele !== idDelete));
  };

  filteredObjects.map((obj) => (total += obj.price));
  cartNumber = arrofId.length;
  const clearCart = () => {
    seArrofIds([]);
  };
  return (
    <div className="container mx-auto p-5 relative">
      {displayForm && (
        <Form onAddItem={setDisplayform} onAddNewData={handleAddData} />
      )}
      {displayCard && (
        <Cart
          onDisplayCart={setDisplaycart}
          filteredObjects={filteredObjects}
          onDeleteItem={getItDelete}
          total={total}
          clear={clearCart}
        />
      )}
      <SortSection
        onAddItem={setDisplayform}
        onDisplayCart={setDisplaycart}
        handleSort={handleSort}
        handleSort2={handleSort2}
        handleSort3={handleSort3}
        handleSort4={handleSort4}
        cartNumber={cartNumber}
      />
      <div className="container w-[90%] mx-auto py-4">
        <Card DataObject={data} handleAddtoCart={handleAddtoCart} />
      </div>
    </div>
  );
}

export default App;
