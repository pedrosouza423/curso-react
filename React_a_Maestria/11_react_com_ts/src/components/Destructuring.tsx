import React from 'react'

type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

const Destructuring = ({ title, content, commentsQty, tags}: Props ) => {
  return (
    <div>
        <h2>{title}</h2>
        <h3>{content}</h3>
        <h3>Quantidade de comentários: {commentsQty}</h3>
        <div>
          {tags.map( tag => (
            <span>#{tag}</span>
          ))}
        </div>
    </div>
  )
}

export default Destructuring