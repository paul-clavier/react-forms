import { Switch } from "@material-ui/core";
import { useReducer } from "react";

const Toggle = () => {
  const [on, toggle] = useReducer((t) => !t, false);
  return (
    <div style={{ margin: 400, display: "flex", flexDirection: "column" }}>
      <h1>Toggle</h1>
      <Switch checked={on} onChange={toggle} />
    </div>
  );
};

export default Toggle;
