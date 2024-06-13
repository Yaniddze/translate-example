import { useReducer } from "react";

const initialState = { count: 0 };

type Actions =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const reducer = (state: typeof initialState, payload: Actions) => {
  switch (payload.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };
  }

  return state;
};

export const useCounter = () => {
  return useReducer(reducer, initialState);
};
