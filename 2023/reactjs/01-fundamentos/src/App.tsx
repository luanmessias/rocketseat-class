import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css';
import styles from './App.module.css'; 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/28929274?v=4",
      name: "John Doe",
      role: "UX Designer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet,",
      },
      {
        type: "paragraph",
        content:
          "consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,",
      },
      {
        type: "paragraph",
        content:
          "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl. Sed euismod,",
      },
      {
        type: "paragraph",
        content: "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl.",
      },
    ],
    publishedAt: new Date("2023-02-11 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/28929274?v=4",
      name: "John Doe One",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet,",
      },
      {
        type: "paragraph",
        content:
          "consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,",
      },
      {
        type: "paragraph",
        content:
          "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl. Sed euismod,",
      },
      {
        type: "paragraph",
        content: "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl.",
      },
      {
        type: "link",
        content: "#LoremIpsum",
      },
    ],
    publishedAt: new Date("2023-02-10 10:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/28929274?v=4",
      name: "John Doe Two",
      role: "Back-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet,",
      },
      {
        type: "paragraph",
        content:
          "consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,",
      },
      {
        type: "paragraph",
        content:
          "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl. Sed euismod,",
      },
      {
        type: "paragraph",
        content: "nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl.",
      },
    ],
    publishedAt: new Date("2023-02-05 10:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts && posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}
