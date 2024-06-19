import Image from 'next/image'
import style from './cardpost.module.css'
import image from './image-banner.png'
import { Avatar } from '../Avatar'




export const CardPost = ({ post }: any) => {
  return (
    <article>

      <header>
        <figure><Image src={post.cover} alt='banner image' width={300} height={300} /></figure>
      </header>

      <section>
        title
        body
        link
      </section>

      <footer>
        <Avatar name={post.author.username} image={post.author.avatar} />
      </footer>
    </article>
  )
}
