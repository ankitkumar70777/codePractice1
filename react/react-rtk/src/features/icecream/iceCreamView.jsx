import { useSelector } from "react-redux";

const IceCreamView = () => {
  
  const numOfIceCream = useSelector((state) => {
    return state.icecreamSliceReducer.numberOfIcrems;
  });

  return (
    <div>
      <h2>Number of iceCream {numOfIceCream}</h2>
      <button>order iceCream</button>
      <button>restock iceCream</button>
    </div>
  );
};

export default IceCreamView;
