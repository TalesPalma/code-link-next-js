import Image from 'next/image'
import style from './cardpost.module.css'
import { Avatar } from '../Avatar'
import { Post } from '@/app/page'


interface CardPostProps {
  post: Post;
}



export const CardPost: React.FC<CardPostProps> = ({ post }) => {

  const { title, body, author, cover } = post

  return (
    <article className={style.card_container}>
      <header className={style.card_header}>
        <figure><Image src={cover} alt='banner image' width={438} height={133} className={style.banner} /></figure>
      </header>

      <section className={style.card_description}>
        <span className={style.description_title}>{title}</span>
        <span className={style.description_body}>{body}</span>

        { /* <span className={style.description_url}>{post.slug}</span> */}

        <footer className={style.card_footer}>
          <Avatar name={author.username} image={author.avatar} />
        </footer>
        <div className={style.containerFeedback}>

          <span className={style.feedback} style={{ color: 'green' }}>
            likes
          </span>

          <span className={style.feedback} style={{ color: '#fff' }}>
            comments
          </span>

          <span className={style.feedback} style={{ color: 'red' }}>
            deslikes
          </span>

        </div>
      </section>
    </article>
  )
}
