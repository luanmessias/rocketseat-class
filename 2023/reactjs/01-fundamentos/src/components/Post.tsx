import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale' 
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: string
  content: string
}

interface PostProps {
  author: Author
  publishedAt: Date
  content: Content[],
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
  const [comments, setComments] = useState(['Post muito bacana, ein?!'])
  const [mewCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {
    locale: ptBR
  })

  const publishedDateRelatedToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const publishedDateToIsoString = publishedAt.toISOString()

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, mewCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('O campo de comentário não pode ficar vazio')
  }

  function deleteComment(commentToDelete: string) {
    const filteredComments = comments.filter((c) => c !== commentToDelete)
    setComments(filteredComments)
  }

  const isNewCommentEmpty = mewCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedDateToIsoString}
        >
          {publishedDateRelatedToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content &&
          content.map((line, index) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>
            }
            if (line.type === "link") {
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              )
            }
          })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={mewCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments &&
          comments.map((comment, index) => {
            return (
              <Comment
                key={index}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })}
      </div>
    </article>
  )
}
