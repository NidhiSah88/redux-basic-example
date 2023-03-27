import { createStore } from "redux";

// create reducers which take action and state as argumnet
// we can create multiple reducers

// code to use store
let countReducer = (state = { value: 10, name: "NK" }, action) => {
  // to do any action on button click etc, action me 2 val ati hai type nd payload
  //catching the action dispatch from component like app.ja
  if (action.type === "ADD") {
    return {
      ...state, // to keep all properties of state, nhi to scren se hat jata hai
      value: state.value + action.payload // old val + cuurent inc val
    };
  }
  if (action.type === "CHNAME") {
    return {
      ...state,
      name: state.name + action.payload
    };
  }

  return state;
};

// create store assigned createstore which takes reducer

let store = createStore(countReducer);

export default store;
