import React from 'react'
import AddArticle from './AddArticle'
import Article from './Article'
import {useSelector} from 'react-redux'

function Articles() {
    
    const articles = useSelector(state => state) 
    

    return (
        <div>
            <AddArticle/>
            <Article data={articles}/>
        </div>
    )
}

export default Articles