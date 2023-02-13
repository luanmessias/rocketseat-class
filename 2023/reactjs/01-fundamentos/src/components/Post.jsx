import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/luanmessias.png" />
          <div className={styles.authorInfo}>
            <strong>John Doe</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title="11 de Fevereiro as 08:00h" dateTime="2023-02-11 08:00:00">
          publicado a 2 horas
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>
          Impedit reprehenderit fugit consequuntur minus quas illum consequatur
          nemo earum sunt, eius aliquid iusto, quaerat optio at culpa, odio
          consectetur possimus.
        </p>
        <p>
          <a href="">#LoremIpsum</a>
          <a href="">#Lorem</a>
          <a href="">#ipsum</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
