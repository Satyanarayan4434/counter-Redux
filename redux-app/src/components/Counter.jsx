import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSclices'

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increament</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement())}>Decreament</button>
        </div>
    );
}

export default Counter;
