import { useCounter } from "../hooks";

export const WithReducer = () => {
  const [state, dispatch] = useCounter();

  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 0 })}>
          increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrement", payload: 0 })}>
          decrement
        </button>
      </div>
    </div>
  );
};
