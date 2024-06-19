import Image from 'next/image'
import style from './cardpost.module.css'
import { Avatar } from '../Avatar'




export const CardPost = ({ post }: any) => {
  return (
    <article className={style.card_container}>

      <header className={style.card_header}>
        <figure><Image src={post.cover} alt='banner image' width={438} height={133} className={style.banner} /></figure>
      </header>

      <section className={style.card_description}>
        <span className={style.description_title}>Titulo do post em duas linhas</span>
        <span className={style.description_body}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</span>
        <span className={style.description_link}>Ver detalhes</span>

        <footer className={style.card_footer}>
          <Avatar name={post.author.username} image={post.author.avatar} />
        </footer>

      </section>

    </article>
  )
}
