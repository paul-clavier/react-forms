import { useReducer, useEffect } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
};

const init = { time: 0, isRunning: false };

const Watch = () => {
  // State of the watch
  const [state, dispatch] = useReducer(reducer, init);

  // Effect to actualize watch every second
  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    const time = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(time);
    };
  }, [state.isRunning]);

  // JSX
  return (
    <div style={{ margin: 400, display: "flex", gap: 10 }}>
      <h1>Watch</h1>
      {state.time}s
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Watch;
