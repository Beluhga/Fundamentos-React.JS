import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comentario.module.css';

export function Comentario({content}){
    return(
       <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Beluhga.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Michael Albuquerque</strong>
                        <time title="26 de Setembro às 20:58" dateTime="2022-09-26 19:57:00">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={20} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp size={24} />
                    Aplaudir <span>20</span>
                </button>
            </footer>

        </div>
       </div>
    )
}