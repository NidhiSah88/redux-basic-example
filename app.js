import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  // code to dispatch action
  let dispatch = useDispatch();

  // using state redux here
  let state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* // displaying state redux value */}
      {state.name}
      {state.value}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: 2 });
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CHNAME", payload: "NIDHI SAH" });
        }}
      >
        Change name{" "}
      </button>
    </div>
  );
}
