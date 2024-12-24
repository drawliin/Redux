import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_article } from '../actions/actions';


function AddArticle() {

    const articles = useSelector(state => state);
    const dispatch = useDispatch();
    const [post, setPost] = useState('')
    const [body, setBody] = useState('')

    function saveArticle(e){
        e.preventDefault();
        const index = articles.length;
        return dispatch(add_article({id: index, title: post, body: body}))
    }

    return (
        <div>
            <form onSubmit={saveArticle}>
                <input type='text' placeholder='Post N... ' onChange={(e) => setPost(e.target.value) } />
                <input type='text' placeholder='body...'  onChange={(e) => setBody(e.target.value) } />
                <input type='submit' value='Add Article'/>
            </form>
        </div>
    )
}

export default AddArticle