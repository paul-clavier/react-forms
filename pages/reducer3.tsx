import { useReducer } from "react";

const useStateReducer = (prevState: any, newState: any) =>
  typeof newState === "function" ? newState(prevState) : newState;

const useStateInitializer = (initialValue: any) =>
  typeof initialValue === "function" ? initialValue() : initialValue;

const useState = (initialValue: any) => {
  return useReducer(useStateReducer, initialValue, useStateInitializer);
  // third argument: https://reactjs.org/docs/hooks-reference.html#lazy-initialization
};

const CalculatorState = () => {
  const [state, setState] = useState(0);

  return (
    <div style={{ margin: 400, display: "flex", flexDirection: "column" }}>
      <h1>Calculator with custom useState</h1>
      <>
        <span>{state}</span>
        <button onClick={() => setState((prevState: any) => prevState + 1)}>
          {"+"}
        </button>
        <button onClick={() => setState((prevState: any) => prevState - 1)}>
          {"-"}
        </button>
      </>
    </div>
  );
};

export default CalculatorState;
