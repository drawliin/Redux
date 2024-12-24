import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { add_livre } from '../actions/actions'

function AddLivre() {

    const [id, setId] = useState('')
    const [titre, setTitre] = useState('')
    const [categorie, setCategorie] = useState('')

    const dispatch = useDispatch();

    function handleAddLivre(e){
        e.preventDefault();
        return dispatch(add_livre({id: id, titre: titre, categorie: categorie}))
    }

    return (
        <form onSubmit={handleAddLivre}>
            <input type='text' placeholder='Id...' onChange={(e) => setId(e.target.value)} required/>
            <input type='text' placeholder='Titre...' onChange={(e) => setTitre(e.target.value)} required/>
            <input type='text' placeholder='Categorie...' onChange={(e) => setCategorie(e.target.value)} required/>
            <input type='Submit' value='Ajouter'/>
        </form>
    )
}

export default AddLivre