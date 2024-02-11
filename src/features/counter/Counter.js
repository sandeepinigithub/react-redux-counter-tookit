import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, updateByPayload } from './counterSlice'

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{count}</div>
            <p>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(updateByPayload(5))}>Update By 5</button>
            </p>
        </div>
    )
}

export default Counter