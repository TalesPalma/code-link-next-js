import Image from 'next/image'
import style from './cardpost.module.css'
import { Avatar } from '../Avatar'
import { Post } from '@/app/page'



interface CardPostProps {
  post: Post
}



export const CardPost: React.FC<CardPostProps> = ({ post }) => {
  console.log(post)
  return (
    <article className={style.card_container}>

      <header className={style.card_header}>
        <figure><Image src={post.cover} alt='banner image' width={438} height={133} className={style.banner} /></figure>
      </header>

      <section className={style.card_description}>
        <span className={style.description_title}>{post.title}</span>
        <span className={style.description_body}>{post.body}</span>
        <span className={style.description_url}>{post.slug}</span>

        <footer className={style.card_footer}>
          <Avatar name={post.author.username} image={post.author.avatar} />
        </footer>

      </section>

    </article>
  )
}
