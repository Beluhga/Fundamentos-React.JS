import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comentario.module.css';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void; /*comment do Post */
}

export function Comentario({content, deleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment(){
        deleteComment(content);
    }

    function handleLikeComment(){
        // pega o valor dos likes mais um
        setLikeCount(likeCount + 1);
    }

    return(
       <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Beluhga.png" alt="" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Michael Albuquerque</strong>
                        <time title="26 de Setembro às 20:58" dateTime="2022-09-26 19:57:00">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={20} />
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