import { DECREMENT, INC_BY_VALUE, INCREMENT } from "./types"

export const incrementAction = async (dispatch) => {
    return dispatch({
        type: INCREMENT
    })
}

export const decrementAction = (dispatch) => {
    return dispatch({
        type: DECREMENT
    })
} 

export const incrementByValueAction = (vl, dispatch) => {
    return dispatch({
        type: INC_BY_VALUE,
        payload: vl
    })
}