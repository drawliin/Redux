// import {INCREMENT, DECREMENT, INC_BY_VALUE} from '../actions/types'

// const counterReducer = (state = {count: 0}, action) => {
//     switch(action.type){
//         case INCREMENT:
//             return {...state, count: state.count + 1};
//         case DECREMENT:
//             return {...state, count: state.count - 1}
//         case INC_BY_VALUE:
//             return {...state, count: state.count + action.payload}
//         default:
//             return state;
//     }
// }

// export default counterReducer;




import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers : {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
      
    }
})

console.log(counterSlice.reducer);

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer