import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.show);

  const incHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: 'increment' });
  }

  const incHandlerPayload = () => {
    dispatch(counterActions.increase(5)); // {payload: 5}
    // dispatch({ type: 'increase', amount: 5 });
  }

  const decHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({ type: "toggle" })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={incHandlerPayload}>Inc by 5</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
