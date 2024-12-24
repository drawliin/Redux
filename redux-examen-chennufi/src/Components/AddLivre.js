import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add_livre} from '../features/livres'

function AddLivre() {

    const [data, setData] = useState({});
    const dispatch = useDispatch();



    const handleAddLivre = (e) => {

        e.preventDefault();

        return dispatch(add_livre(data))

    }


    return (
        <div>
            <form onSubmit={(e) => {handleAddLivre(e)}}>
                <input type='text' placeholder = 'Id...' onChange={(e) => {setData({
                    ...data, id: e.target.value
                })}} required/><br/>
                <input type='text' placeholder = 'titre...' onChange={(e) => {setData({
                    ...data, titre: e.target.value
                })}} required/><br/>
                <input type='text' placeholder = 'categorie' onChange={(e) => {setData({
                    ...data, categorie: e.target.value
                })}} required/><br/>
                <input type='submit' value = 'Ajouter Livre'/><br/>
            </form>
        </div>
    )
}

export default AddLivre