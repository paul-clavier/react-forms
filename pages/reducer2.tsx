import { useReducer } from "react";

const reducer = (
  state: { counter: number },
  action: { type: "increase" | "decrease" }
) => {
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };
    case "decrease":
      return { counter: state.counter - 1 };
    default:
      throw new Error();
  }
};

const initialState = {
  counter: 0,
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ margin: 400, display: "flex", flexDirection: "column" }}>
      <h1>Calculator</h1>
      <>
        <span>{state.counter}</span>
        <button onClick={() => dispatch({ type: "increase" })}>{"+"}</button>
        <button onClick={() => dispatch({ type: "decrease" })}>{"-"}</button>
      </>
    </div>
  );
};

export default Calculator;
