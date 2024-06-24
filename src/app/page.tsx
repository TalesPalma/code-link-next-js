import { CardPost } from "@/components/CardCode";
import style from './page.module.css'



export interface Author {
  id: string,
  name: string,
  username: string,
  avatar: string,
}


export interface Post {
  id: string,
  cover: string,
  title: string,
  slug: string,
  body: string,
  markdow: string,
  author: Author
}






async function get_all_post() {
  const response = await fetch('http://localhost:3042/posts');

  if (!response.ok) {
    console.log("Ops ocorreu algum erro na get_all_post() !!!")
  }
  return response.json();
}


export default async function Home() {
  const posts: Post[] = await get_all_post()
  return (
    <main className={style.page_container}>

      <div className={style.card_container}>
        {posts.map((item: Post) => <CardPost key={item.id} post={item} />)}
      </div>

    </main >
  );
}
