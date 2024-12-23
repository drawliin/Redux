import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementAction, incrementAction, incrementByValueAction } from '../redux/actions/counterActions';
import {increment, decrement, incrementByAmount} from '../redux/reducers/counterReducer'

export default function Counter() {
    
    const countState = useSelector(state => state.counter.count);
    const dispatch = useDispatch();



    // const handleIncrement = () => {

    //     incrementAction(dispatch)
    // }

    // const handleDecrement = () => {
    //     decrementAction(dispatch)
    // }

    // const handleIncByValue = (vl) => {
    //     incrementByValueAction(vl, dispatch)
    // }
    // return (
    //     <div>
    //         <p>{countState}</p>
    //         <button onClick = {handleIncrement}>Increment</button>
    //         <button onClick = {handleDecrement}>Decrement</button>
    //         <button onClick = {() => handleIncByValue(3)}>Increment By Value</button>
    //     </div>
    // )
    


    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncByAmount = (vl) => {
        dispatch(incrementByAmount(vl))
    }

    

    return (
        <div>
            <p>{countState}</p>
            <button onClick = {handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
            <button onClick={() => handleIncByAmount(5)}>Increment By Value</button>
        </div>
    )
}
