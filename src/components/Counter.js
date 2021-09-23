import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show)

  const incHandler = () => {
    dispatch({ type: 'increment' });
  }

  const incHandlerPayload = () => {
    dispatch({ type: 'increase', amount: 5 });
  }

  const decHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" })
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
