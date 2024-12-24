import { ADD_ARTICLE } from "../actions/actions"

const initialState = [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
    ]

const articleReducer = (state = initialState, action) => {
    
    if(action.type == ADD_ARTICLE){
        return [
            ...state,
            action.payload
        ]
    }

    return state;
    
}

export default articleReducer