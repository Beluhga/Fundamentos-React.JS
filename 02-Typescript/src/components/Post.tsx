import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { Comentario } from './Comentario';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content}:PostProps){ /*author pra nao precisar colocar props: exemplo: props.author.avatarUrl */
const [comments, setComments] = useState([
'Post Muito bacana, hein? '
]);

const [newCommentText, setNewCommentText] = useState('')

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { /* Distancia da data que foi publicada do dia da postagem */
    locale: ptBR,
    addSuffix: true, /*para ficar "Em cerca de uma hora ou há um dia*/
})

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault() /*Para evitar de redirecionar para outro lugar */

        setComments([...comments, newCommentText]);
        setNewCommentText(''); /*Para deixa o valor vazio */

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) { /*HTMLTextAreaElement: Local onde aconteceu o evento */
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        const CriarListadeComentariosSemODeletado = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(CriarListadeComentariosSemODeletado);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){ /*Mensagem para quando for obrigatorio para posta algo */
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    const NovoComentario = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}  />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {/* Como deveria ser sem o toISOString: "2022-09-26 19:57:00" */}
                   {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        // content dentro do App.jsx
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                 {/* disabled={newCommentText.length === 0} = o botão de publicar ficara desativado quando nao estiver nada digitado */}
                <button type="submit" disabled={NovoComentario}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comentario 
                            key={comment} 
                            content={comment} 
                            deleteComment={deleteComment} />
                    )
                })}
                
            </div>
        </article>
    )
}