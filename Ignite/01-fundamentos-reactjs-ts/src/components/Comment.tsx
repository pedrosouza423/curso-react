import React, { useState } from 'react'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from './Avatar';
import { set } from 'date-fns/esm';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount(state => {
            return state + 1
        })
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
                        <time title='11 de maio às 11:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

