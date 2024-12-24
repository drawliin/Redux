import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add_livre, delete_livre} from '../features/livres'

function ListLivres() {

    const dispatch = useDispatch();
    const livres = useSelector(state => state.livre.values);

    
    return (
        <div>
            <table border='1'>
                <tr>
                    <th>Id</th>
                    <th>Titre</th>
                    <th>Categorie</th>
                    <th>Action</th>
                </tr>
                {livres.map((element) => {
                    return(
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.titre}</td>
                            <td>{element.categorie}</td>
                            <td><button onClick={() => dispatch(delete_livre(element.id))}>Delete</button></td>
                        </tr>
                        
                    )
                })}
            </table>
        </div>
    )
}

export default ListLivres