import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Beluhga.png",
      name: "Michael Albuquerque",
      role: "Desenvolvedor Mobile"
    },
    content: [
      {type: 'paragraph', content:  'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2022-09-28 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marcosaureliodiasmoura.png",
      name: "Marcos Moura",
      role: "Desenvolvedor Front-End"
    },
    content: [
      {type: 'paragraph', content:  'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2022-09-28 20:20:00'),
  },
];

import './global.css';
function App() {

  return (

  <div>

  <Header />

  <div className={styles.wrapper}>
    <Sidebar />
    <main>
      
     {posts.map(post => { /*map: pq ele retorna sempre algo dentro dele */
      return (
        <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
      )
     })}

    </main>
    </div>
   
   </div>
  )
}

export default App

/*
author: { avatar_url: "", name: "", role: ""}
publishedAt: Date
content: String
 */
