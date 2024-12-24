import {createSlice} from '@reduxjs/toolkit'

export const livreSlice = createSlice({
    name: 'livres',
    initialState:{
        values : [
            {id: 10, titre: 'REACT REDUX', categorie: 'Front-End'},
            {id: 11, titre: 'LARAVEL', categorie: 'Back-End'},
        ]
    },
    reducers: {
        add_livre: (state, action) => {
            state.values = [...state.values, action.payload]
        },
        delete_livre: (state, action) => {
            state.values = state.values.filter((element) => (element.id != action.payload))
        }
    }
})

export const {add_livre, delete_livre} = livreSlice.actions; 
export default livreSlice.reducer;