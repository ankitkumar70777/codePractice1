import { createStore } from "redux";
import { produce } from "immer";


const initialStateEmp = {
  name: "",
  age: null,
  address: {
    houseNo: null,
    village: "",
  },
};

const empActionCreater = (updatedEmp = {}) => {
  return {
    type: "UPDATE_ADDRESS",
    updatedEmp,
  };
};

const empReducer = (state = initialStateEmp, action) => {
  switch (action.type) {
    // by using immer we can do same task of merging object state new state
    case "UPDATE_ADDRESS": return produce(state, (draftState) => { 
      draftState.name = action.updatedEmp.name,
        draftState.age = action.updatedEmp.age,
        draftState.address = action.updatedEmp.address
  })
      
      // return {
      //   ...state,
      //   name: action.updatedEmp.name,
      //   age: action.updatedEmp.age,
      //   address: {
      //     ...state.address,
      //     houseNo: action.updatedEmp.address.houseNo,
      //     village: action.updatedEmp.address.village,
      //   },
      // };
    default:
      return state;
  }
};

// create store
const store = createStore(empReducer);

// get state
console.log("letestState", store.getState());

store.dispatch(
  empActionCreater({
    name: "ankitkumar",
    age: 29,
    address: {
      houseNo: 216,
      village: "ghonsai",
    },
  })
);

// get state
console.log("letestState", store.getState());
