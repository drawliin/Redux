import React from 'react'

function Article({data}) {
  return (
    <div>
        {data.map((element) => {
            return(
                <>
                    <h1>{element.title}</h1>
                    <p>{element.body}</p>
                </>

            )
        })}
    </div>
  )
}

export default Article