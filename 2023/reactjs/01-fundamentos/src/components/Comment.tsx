import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface onDeleteComment {
  (comment: string): void
}

interface CommentProps {
  content: string
  onDeleteComment: onDeleteComment
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luanmessias.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time
                title="11 de Fevereiro as 08:00h"
                dateTime="2023-02-11 08:00:00"
              >
                Cerca de 2 horas atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
