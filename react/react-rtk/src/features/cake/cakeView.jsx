import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice.js";

const CakeView = () => {
  // to read data from redux store in react component we use useSelector hook
  const numOfCakes = useSelector((state) => {
    return state.cakeReducer.numberOfCake;
  });

  // to dispatch action use useDispatch
  const dispatch = useDispatch();

  // always store only those state that needed in redux store, everything else cn be local component
  return (
    <div>
      <h2>Number of cakes == {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(cakeActions.ordered());
        }}
      >
        order cake{" "}
      </button>
      <button onClick={() => {
          dispatch(cakeActions.restocked(10));
        }}>restock cake</button>
    </div>
  );
};

export default CakeView;
