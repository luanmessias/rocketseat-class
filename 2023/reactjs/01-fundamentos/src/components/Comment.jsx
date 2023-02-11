import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.authorAvatar}
        src="https://github.com/luanmessias.png"
      />

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

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aspernatur ab sit! Nemo cum porro illo consectetur dolorum nulla
            facilis neque ad, sunt minus reiciendis voluptate iste natus.
            Maiores, dolorem.
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
