import { Trash, ThumbsUp } from 'phosphor-react'
import React from 'react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComent() {
        setLikeCount(likeCount + 1);
    }
  return (
    <div className={styles.comment}>
        <Avatar 
            hasBorder={false} 
            src="https://avatars.githubusercontent.com/u/62824231?v=4" 
        />
      
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pedro Souza</strong>
                        <time title='11 de maio às 08:10h' dateTime="2022-05-11 08:10:00">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComent}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
