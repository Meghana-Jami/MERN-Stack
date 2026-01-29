import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slices/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch (increment())}>+</button>
        <button onClick={() => dispatch (decrement())}>-</button>
        <button onClick={() => dispatch (incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;