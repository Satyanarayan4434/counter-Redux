import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector((state)=>state.Counter.value);
    return (
        <div>
            <div>Increament</div>
            <p>{count}</p>
            <div>Decreament</div>
        </div>
    );
}

export default Counter;
