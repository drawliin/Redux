export const ADD_LIVRE = 'ADD_LIVRE';
export const DELETE_LIVRE = 'DELETE_LIVRE';




export const add_livre = (livre) => {
        return {
            type: ADD_LIVRE,
            payload: livre
        }
}

export const delete_livre = (id) => {
    return {
        type: DELETE_LIVRE,
        payload: id
    }
}