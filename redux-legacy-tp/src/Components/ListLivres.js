import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { delete_livre } from '../actions/actions';

function ListLivres() {

    const livres = useSelector(state => state.livres);
    const dispatch = useDispatch();

    if(!livres) {
        return <p>No books Found</p>
    }

    return (
        <div>
            <h3>List des livres</h3>
            <table border='1'>
                <tr>
                    <th>Id</th>
                    <th>titre</th>
                    <th>categorie</th>
                    <th>Action</th>
                </tr>
                {livres.map((element) => {
                    return (
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.titre}</td>
                            <td>{element.categorie}</td>
                            <td><button onClick={() => dispatch(delete_livre(element.id))}>Supprimer</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ListLivres