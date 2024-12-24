import { ADD_LIVRE, DELETE_LIVRE } from "../actions/actions";


const livreReducer = (state={
    livres: [
        { id: 10, titre: "REACT REDUX", categorie: "Front-END" },
        { id: 11, titre: "LARAVEL", categorie: "Back-END" },
      ]
}, action) => {

    if(action.type == ADD_LIVRE){
        return {
            ...state,
            livres: [...state.livres, action.payload]
        }
    }else if(action.type == DELETE_LIVRE){
        return {
            ...state,
            livres: state.livres.filter((element) => element.id !== action.payload)
        }
    }else{
        return state
    }


}

export default livreReducer;