import { useState } from "react";
function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  const reset = () => {
    setState(false);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle, reset];
}
export default useToggle;
